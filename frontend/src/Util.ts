import {
  CountStatusResponseEntry,
  RawRepoEntryDataResponse,
  RepoApiResponseEntry,
  UpdateStatusReponseEntry,
} from './models/RepoEntryApiResponse';
import { RepoEntryData } from './models/RepoEntryData';
import axios from 'axios';

export const fetchCountStatusData: (
  baseUrl: string
) => Promise<CountStatusResponseEntry[]> = (baseUrl: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}countstatusapi/countstatus`)
      .then((res) => {
        resolve(res.data as CountStatusResponseEntry[]);
      })
      .catch((err) => {
        console.log(err);
        reject([]);
      });
  });
};

export const fetchUpdateStatusData: (
  baseUrl: string
) => Promise<UpdateStatusReponseEntry[]> = (baseUrl: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}updatestatusapi/updatestatus`)
      .then((res) => {
        resolve(res.data as UpdateStatusReponseEntry[]);
      })
      .catch((err) => {
        console.log(err);
        reject([]);
      });
  });
};

export const fetchDataByLanguage: (
  baseUrl: string,
  language: string
) => Promise<RepoEntryData[]> = (baseUrl: string, language: string) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}repoitemapi/repo/${language}`)
      .then((res) => {
        const transformedRepoList = convertApiResponseListToRepoEntryDataList(
          res.data as RepoApiResponseEntry[]
        );
        resolve(transformedRepoList);
      })
      .catch((err) => {
        console.log(err);
        reject([]);
      });
  });
};

export const convertRawToProcessed: (
  rd: RawRepoEntryDataResponse[]
) => RepoEntryData[] = (rawData: RawRepoEntryDataResponse[]) => {
  const transformedData = rawData.map(
    (repoEntry) =>
      ({
        stars: repoEntry.stargazers_count,
        createdAtDateString: repoEntry.created_at,
        description: repoEntry.description,
        htmlUrl: repoEntry.html_url,
        openIssues: repoEntry.open_issues_count,
        ownerAvatarImageUrl: repoEntry.owner.avatar_url,
        ownerName: repoEntry.owner.login,
        repoName: repoEntry.name,
      } as RepoEntryData)
  );

  return transformedData;
};

export const convertApiResponseListToRepoEntryDataList = (
  apiResponseList: RepoApiResponseEntry[]
) => {
  const finalRepoEntryDataList = [];

  for (const apiResponseEntry of apiResponseList) {
    finalRepoEntryDataList.push({
      createdAtDateString: apiResponseEntry.createdDateString,
      description: apiResponseEntry.description,
      htmlUrl: apiResponseEntry.htmlUrl,
      openIssues: apiResponseEntry.issues,
      ownerAvatarImageUrl: apiResponseEntry.ownerAvatarUrl,
      ownerName: apiResponseEntry.ownerName,
      repoName: apiResponseEntry.name,
      stars: apiResponseEntry.stars,
    } as RepoEntryData);
  }

  return finalRepoEntryDataList;
};
