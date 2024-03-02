package com.jnydam.springreader.models;

import java.util.List;

public class AggregatedResponse {

    private List<GithubRepoItem> javascriptRepos; 
    private List<GithubRepoItem> cPlusPlusRepos;
    private List<GithubRepoItem> javaRepos;
    private List<GithubRepoItem> pythonRepos;
    
    public AggregatedResponse(List<GithubRepoItem> javascriptRepos, List<GithubRepoItem> cPlusPlusRepos,
            List<GithubRepoItem> javaRepos, List<GithubRepoItem> pythonRepos) {
        this.javascriptRepos = javascriptRepos;
        this.cPlusPlusRepos = cPlusPlusRepos;
        this.javaRepos = javaRepos;
        this.pythonRepos = pythonRepos;
    }
    public List<GithubRepoItem> getJavascriptRepos() {
        return javascriptRepos;
    }
    public void setJavascriptRepos(List<GithubRepoItem> javascriptRepos) {
        this.javascriptRepos = javascriptRepos;
    }
    public List<GithubRepoItem> getcPlusPlusRepos() {
        return cPlusPlusRepos;
    }
    public void setcPlusPlusRepos(List<GithubRepoItem> cPlusPlusRepos) {
        this.cPlusPlusRepos = cPlusPlusRepos;
    }
    public List<GithubRepoItem> getJavaRepos() {
        return javaRepos;
    }
    public void setJavaRepos(List<GithubRepoItem> javaRepos) {
        this.javaRepos = javaRepos;
    }
    public List<GithubRepoItem> getPythonRepos() {
        return pythonRepos;
    }
    public void setPythonRepos(List<GithubRepoItem> pythonRepos) {
        this.pythonRepos = pythonRepos;
    }

    

    

    
    
}
