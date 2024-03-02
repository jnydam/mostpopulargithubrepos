package com.jnydam.springreader.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jnydam.springreader.models.UpdateStatusItem;

public interface UpdateStatusItemRepository extends MongoRepository<UpdateStatusItem, String> {
    
}
