package com.jnydam.springreader.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jnydam.springreader.models.CountStatusItem;
import com.jnydam.springreader.repository.CountStatusItemRepository;

@Service
public class CountStatusItemServiceImpl implements CountStatusItemService {

    private CountStatusItemRepository countStatusItemRepository;

    @Autowired
    public CountStatusItemServiceImpl(CountStatusItemRepository theCountStatusItemRepository) {
        countStatusItemRepository = theCountStatusItemRepository;

    }

    @Override
    public List<CountStatusItem> findAllCountStatuses() {
        
        return this.countStatusItemRepository.findAll();
    }
    
}
