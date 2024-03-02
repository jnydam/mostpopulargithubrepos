package com.jnydam.springreader.service;

import java.util.List;

import com.jnydam.springreader.models.GithubRepoItem;

public interface GithubRepoItemService {

    List<GithubRepoItem> findAllJavaRepos();

    List<GithubRepoItem> findAllJavascriptRepos();

    List<GithubRepoItem> findAllCPlusPlusRepos();

    List<GithubRepoItem> findAllPythonRepos();

    List<GithubRepoItem> findAllRepos();


}