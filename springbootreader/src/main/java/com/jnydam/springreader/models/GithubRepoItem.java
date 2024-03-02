package com.jnydam.springreader.models;


import org.springframework.data.mongodb.core.mapping.Document;

@Document("githubrepoitems")
public class GithubRepoItem {

    private String name;
    private String description;
    private String htmlUrl;
    private String ownerAvatarUrl;
    private String language;
    private int stars;
    private int issues;
    private String ownerName;
    private String createdDateString;

    public GithubRepoItem(String name, String description, String htmlUrl, String ownerAvatarUrl, String language,
            int stars, int issues, String ownerName, String createdDateString) {
        this.name = name;
        this.description = description;
        this.htmlUrl = htmlUrl;
        this.ownerAvatarUrl = ownerAvatarUrl;
        this.language = language;
        this.stars = stars;
        this.issues = issues;
        this.ownerName = ownerName;
        this.createdDateString = createdDateString;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getHtmlUrl() {
        return htmlUrl;
    }
    public void setHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
    }
    public String getOwnerAvatarUrl() {
        return ownerAvatarUrl;
    }
    public void setOwnerAvatarUrl(String ownerAvatarUrl) {
        this.ownerAvatarUrl = ownerAvatarUrl;
    }
    public String getLanguage() {
        return language;
    }
    public void setLanguage(String language) {
        this.language = language;
    }
    public int getStars() {
        return stars;
    }
    public void setStars(int stars) {
        this.stars = stars;
    }
    public int getIssues() {
        return issues;
    }
    public void setIssues(int issues) {
        this.issues = issues;
    }
    public String getOwnerName() {
        return ownerName;
    }
    public void setOwnerName(String ownerName) {
        this.ownerName = ownerName;
    }
    public String getCreatedDateString() {
        return createdDateString;
    }
    public void setCreatedDateString(String createdDateString) {
        this.createdDateString = createdDateString;
    }
    


    
}
