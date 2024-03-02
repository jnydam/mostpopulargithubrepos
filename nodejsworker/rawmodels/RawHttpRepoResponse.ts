export type RawRepoItem = {
  name: string;
  stargazers_count: number;
  open_issues_count: number;
  created_at: string;
  html_url: string;
  language: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

export type RawHttpRepoResponse = {
  total_count: number;
  items: RawRepoItem[];
};
