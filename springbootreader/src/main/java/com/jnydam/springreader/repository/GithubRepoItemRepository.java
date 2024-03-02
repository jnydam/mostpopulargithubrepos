package com.jnydam.springreader.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.jnydam.springreader.models.GithubRepoItem;

public interface GithubRepoItemRepository extends MongoRepository<GithubRepoItem, String> {

    @Query("{ 'language' : ?0 }")
    List<GithubRepoItem> findGithubRepoItemByLanguage(String language, Sort sort);

  
}
