package com.jnydam.springreader.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document("countstatuses")
public class CountStatusItem {

    private String countName;
    private String countNumber;
    
    public CountStatusItem(String countName, String countNumber) {
        this.countName = countName;
        this.countNumber = countNumber;
    }

    public String getCountName() {
        return countName;
    }

    public void setCountName(String countName) {
        this.countName = countName;
    }

    public String getCountNumber() {
        return countNumber;
    }

    public void setCountNumber(String countNumber) {
        this.countNumber = countNumber;
    }
   

}
