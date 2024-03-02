package com.jnydam.springreader.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jnydam.springreader.models.UpdateStatusItem;
import com.jnydam.springreader.repository.UpdateStatusItemRepository;

@Service
public class UpdateStatusItemServiceImpl implements UpdateStatusItemService {

        private UpdateStatusItemRepository updateStatusItemRepository;

    @Autowired
    public UpdateStatusItemServiceImpl(UpdateStatusItemRepository theUpdateStatusItemRepository) {
        updateStatusItemRepository = theUpdateStatusItemRepository;

    }

    @Override
    public List<UpdateStatusItem> findAllUpdateStatuses() {
        
        return this.updateStatusItemRepository.findAll();
        
    }
 


}
