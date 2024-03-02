package com.jnydam.springreader.repository;

import com.jnydam.springreader.models.CountStatusItem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CountStatusItemRepository extends MongoRepository<CountStatusItem, String> {

}
