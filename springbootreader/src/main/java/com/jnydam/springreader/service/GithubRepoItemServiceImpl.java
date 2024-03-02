package com.jnydam.springreader.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.jnydam.springreader.models.GithubRepoItem;
import com.jnydam.springreader.repository.GithubRepoItemRepository;

@Service
public class GithubRepoItemServiceImpl implements GithubRepoItemService {

    private GithubRepoItemRepository githubRepoItemRepository;

    @Autowired
    public GithubRepoItemServiceImpl(GithubRepoItemRepository theGithubRepoItemRepository) {
        githubRepoItemRepository = theGithubRepoItemRepository;

    }

    @Override
    public List<GithubRepoItem> findAllJavaRepos() {
        
        Sort newSort = Sort.by(Sort.Direction.DESC, "stars");
        return this.githubRepoItemRepository.findGithubRepoItemByLanguage("Java", newSort);
    }

    @Override
    public List<GithubRepoItem> findAllJavascriptRepos() {

        Sort newSort = Sort.by(Sort.Direction.DESC, "stars");
        return this.githubRepoItemRepository.findGithubRepoItemByLanguage("JavaScript", newSort);
    }

    @Override
    public List<GithubRepoItem> findAllCPlusPlusRepos() {
        
        Sort newSort = Sort.by(Sort.Direction.DESC, "stars");
        return this.githubRepoItemRepository.findGithubRepoItemByLanguage("C++", newSort);
    }

    @Override
    public List<GithubRepoItem> findAllPythonRepos() {
        
        Sort newSort = Sort.by(Sort.Direction.DESC, "stars");
        return this.githubRepoItemRepository.findGithubRepoItemByLanguage("Python", newSort);
    }

    @Override
    public List<GithubRepoItem> findAllRepos() {
        
        return this.githubRepoItemRepository.findAll();
    }

}
