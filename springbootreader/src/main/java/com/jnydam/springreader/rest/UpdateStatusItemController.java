package com.jnydam.springreader.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import com.jnydam.springreader.models.UpdateStatusItem;
import com.jnydam.springreader.service.UpdateStatusItemService;

@RestController
@RequestMapping("/updatestatusapi")
public class UpdateStatusItemController {

    private UpdateStatusItemService updateStatusItemService;


    @Autowired
    public UpdateStatusItemController(UpdateStatusItemService theUpdateStatusItemService) {

        updateStatusItemService = theUpdateStatusItemService;

    }

        
    @GetMapping("/updatestatus")
    public DeferredResult<List<UpdateStatusItem>> retrieveAllCountStatusItems() {

        DeferredResult<List<UpdateStatusItem>> result = new DeferredResult<>();

        result.setResult(updateStatusItemService.findAllUpdateStatuses());

        return result;
    }
    
}
