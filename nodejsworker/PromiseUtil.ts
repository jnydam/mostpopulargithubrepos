import CountStatus from './mongoosemodels/CountStatus';
import axios from 'axios';
import {
  RawHttpRepoResponse,
  RawRepoItem,
} from './rawmodels/RawHttpRepoResponse';
import GithubRepoItem from './mongoosemodels/GithubRepoItem';

export const ENDING_URL = '&sort=stars&order=desc';

export const JAVASCRIPT = 'javascript';
export const JAVA = 'java';
export const PYTHON = 'python';
export const GO = 'go';
export const CPLUSPLUS = 'cpp';

// GITHUB_BASE_REPO_API_URL=https://api.github.com/search/repositories?q=language:typescript

const processRawResponse: (resp: RawHttpRepoResponse) => RawHttpRepoResponse = (
  rawResponse: RawHttpRepoResponse
) => {
  const rawItems = rawResponse.items;

  const typedItems = rawItems.map(
    (item) =>
      ({
        name: item.name,
        language: item.language,
        created_at: item.created_at,
        open_issues_count: item.open_issues_count,
        owner: {
          login: item.owner.login,
          avatar_url: item.owner.avatar_url,
        },
        description: item.description,
        html_url: item.html_url,
        stargazers_count: item.stargazers_count,
      } as RawRepoItem)
  );

  return {
    items: typedItems,
    total_count: rawResponse.total_count,
  };
};

export const propogateResultsToDb = async (
  transformedResultArray: RawHttpRepoResponse,
  languageType: string
) => {
  await CountStatus.deleteOne({ countName: languageType });

  const newCountStatus = new CountStatus({
    countName: languageType,
    countNumber: transformedResultArray.total_count,
  });

  await newCountStatus.save();

  for (const resultItem of transformedResultArray.items) {
    const newGithubRepoItem = new GithubRepoItem({
      createdDateString: resultItem.created_at,
      description: resultItem.description,
      htmlUrl: resultItem.html_url,
      issues: resultItem.open_issues_count,
      language: resultItem.language,
      name: resultItem.name,
      ownerAvatarUrl: resultItem.owner.avatar_url,
      ownerName: resultItem.owner.login,
      stars: resultItem.stargazers_count,
    });

    await newGithubRepoItem.save();
  }
};

export const fetchCPlusPlusRepos: () => Promise<RawHttpRepoResponse> =
  async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.GITHUB_BASE_REPO_API_URL}?q=language:${CPLUSPLUS}${ENDING_URL}`
        )
        .then((res) => {
          const truncatedResults = processRawResponse(res.data);
          resolve(truncatedResults);
        })
        .catch((err) => {
          console.log(err);
          reject('Something went wrong fetching the c plus plus repos');
        });
    });
  };

export const fetchJavaScriptRepos: () => Promise<RawHttpRepoResponse> =
  async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.GITHUB_BASE_REPO_API_URL}?q=language:${JAVASCRIPT}${ENDING_URL}`
        )
        .then((res) => {
          const truncatedResults = processRawResponse(res.data);
          resolve(truncatedResults);
        })
        .catch((err) => {
          console.log(err);
          reject('Something went wrong fetching the javascript repos');
        });
    });
  };

export const fetchPythonRepos: () => Promise<RawHttpRepoResponse> =
  async () => {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${process.env.GITHUB_BASE_REPO_API_URL}?q=language:${PYTHON}${ENDING_URL}`
        )
        .then((res) => {
          const truncatedResults = processRawResponse(res.data);
          resolve(truncatedResults);
        })
        .catch((err) => {
          console.log(err);
          reject('Something went wrong fetching the python repos');
        });
    });
  };

export const fetchJavaRepos: () => Promise<RawHttpRepoResponse> = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${process.env.GITHUB_BASE_REPO_API_URL}?q=language:${JAVA}${ENDING_URL}`
      )
      .then((res) => {
        const truncatedResults = processRawResponse(res.data);
        resolve(truncatedResults);
      })
      .catch((err) => {
        console.log(err);
        reject('Something went wrong fetching the java repos');
      });
  });
};
