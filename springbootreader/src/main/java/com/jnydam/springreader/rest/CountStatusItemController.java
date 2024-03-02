package com.jnydam.springreader.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.async.DeferredResult;

import com.jnydam.springreader.models.CountStatusItem;
import com.jnydam.springreader.service.CountStatusItemService;

@RestController
@RequestMapping("/countstatusapi")
public class CountStatusItemController {

    private CountStatusItemService countStatusItemService;

    @Autowired
    public CountStatusItemController(CountStatusItemService theCountStatusItemService) {

        countStatusItemService = theCountStatusItemService;

    }

    
    @GetMapping("/countstatus")
    public DeferredResult<List<CountStatusItem>> retrieveAllCountStatusItems() {

        DeferredResult<List<CountStatusItem>> result = new DeferredResult<>();

        result.setResult(countStatusItemService.findAllCountStatuses());

        return result;
    }

}
