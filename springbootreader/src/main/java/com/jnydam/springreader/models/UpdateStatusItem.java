package com.jnydam.springreader.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("updatestatuses")
public class UpdateStatusItem {

    private String dataLastUpdatedDateString;

    public UpdateStatusItem(String dataLastUpdatedDateString) {
        this.dataLastUpdatedDateString = dataLastUpdatedDateString;
    }

    public String getDataLastUpdatedDateString() {
        return dataLastUpdatedDateString;
    }

    public void setDataLastUpdatedDateString(String dataLastUpdatedDateString) {
        this.dataLastUpdatedDateString = dataLastUpdatedDateString;
    }

    
    
}
