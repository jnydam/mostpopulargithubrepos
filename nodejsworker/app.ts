import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cron from 'node-cron';
import {
  fetchCPlusPlusRepos,
  fetchJavaRepos,
  fetchJavaScriptRepos,
  fetchPythonRepos,
  propogateResultsToDb,
} from './PromiseUtil';
import UpdateStatus from './mongoosemodels/UpdateStatus';
import GithubRepoItem from './mongoosemodels/GithubRepoItem';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

if (!process.env.MONGO_DB_URL) {
  throw new Error('There is no mongo db environment variable set');
}

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

const handleRepoFetchIteration = async () => {
  const date = new Date();

  const [javascriptResults, cPlusPlusResults, pythonResults, javaResults] =
    await Promise.all([
      fetchJavaScriptRepos(),
      fetchCPlusPlusRepos(),
      fetchPythonRepos(),
      fetchJavaRepos(),
    ]);

  if (javascriptResults.items.length === 0) {
    throw new Error('JavaScript Results are Empty');
  }
  if (cPlusPlusResults.items.length === 0) {
    throw new Error('C++ Results are Empty');
  }
  if (pythonResults.items.length === 0) {
    throw new Error('Python Results are Empty');
  }
  if (javaResults.items.length === 0) {
    throw new Error('Java Results are Empty');
  }

  await GithubRepoItem.deleteMany();

  await propogateResultsToDb(javascriptResults, 'javascript');
  await propogateResultsToDb(cPlusPlusResults, 'c++');
  await propogateResultsToDb(pythonResults, 'python');
  await propogateResultsToDb(javaResults, 'java');

  await UpdateStatus.deleteMany();

  const newUpdateStatus = new UpdateStatus({
    dataLastUpdatedDateString: date.toISOString(),
  });

  await newUpdateStatus.save();
};

app.get('/testping', async (req, res) => {
  try {
    await handleRepoFetchIteration();

    res.json({
      message: 'Results were successfully updated',
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      debug: err,
      message: 'Something went wrong populating the db',
    });
  }
});

cron.schedule('0 0 * * *', async () => {
  try {
    await handleRepoFetchIteration();
  } catch (err) {
    console.log('Something went wrong with the cron function');
    console.log(err);
  }
});

const server = app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});

export const waitForDbSetup = () => {
  return new Promise((resolve, reject) => {
    const mongoSetupPromise = mongoose.connect(process.env.MONGO_DB_URL!);
    mongoSetupPromise
      .then((res) => {
        resolve('success');
      })
      .catch((err) => {
        console.log(err);
        reject('error');
      });
  });
};

if (process.env.NODE_ENV !== 'test') {
  waitForDbSetup();
}

export default server;
