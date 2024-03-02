export type RawRepoEntryDataResponse = {
  name: string;
  created_at: string;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
  html_url: string;
  stargazers_count: number;
};

export type RepoEntryApiResponse = {
  countStatus: number;
  repos: RawRepoEntryDataResponse[];
};

export type RepoApiResponseEntry = {
  name: string;
  description: string;
  htmlUrl: string;
  ownerAvatarUrl: string;
  language: string;
  stars: number;
  issues: number;
  ownerName: string;
  createdDateString: string;
};

export type CountStatusResponseEntry = {
  countName: string;
  countNumber: string;
};

export type UpdateStatusReponseEntry = {
  dataLastUpdatedDateString: string;
};
