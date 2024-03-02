package com.jnydam.springreader.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import com.jnydam.springreader.models.GenericResponse;
import com.jnydam.springreader.models.GithubRepoItem;
import com.jnydam.springreader.service.GithubRepoItemService;

@RestController
@RequestMapping("/repoitemapi")
public class GithubRepoItemController {

    private GithubRepoItemService githubRepoItemService;


    @Autowired
    public GithubRepoItemController(GithubRepoItemService theGithubRepoItemService) {

        githubRepoItemService = theGithubRepoItemService;

    }

    @GetMapping("/repo/{language}")
    public DeferredResult<List<GithubRepoItem>> retrieveGithubReposByLanguage(@PathVariable String language) {

        DeferredResult<List<GithubRepoItem>> result = new DeferredResult<>();

        List<GithubRepoItem> retrievedRepositories = new ArrayList<GithubRepoItem>();

        switch (language) {
            case "java":
                retrievedRepositories = githubRepoItemService.findAllJavaRepos();
                break;
            case "javascript":
                retrievedRepositories = githubRepoItemService.findAllJavascriptRepos();
                break;
            case "python":
                retrievedRepositories = githubRepoItemService.findAllPythonRepos();
                break;
            case "cpp":
                retrievedRepositories = githubRepoItemService.findAllCPlusPlusRepos();
                break;
            default:
                break;
        }

        result.setResult(retrievedRepositories);

        return result;
        

    }

    @GetMapping("/repos")
    public DeferredResult<List<GithubRepoItem>> retrieveAllGithubRepoItems() {

        DeferredResult<List<GithubRepoItem>> result = new DeferredResult<>();

        result.setResult(githubRepoItemService.findAllRepos());

        return result;
    }

    @GetMapping("/test")
    public DeferredResult<GenericResponse> populateDummyData() {

        DeferredResult<GenericResponse> result = new DeferredResult<>();

        result.setResult(new GenericResponse("Test HTTP OK!"));

        return result;

    }


    
}
