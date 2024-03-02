package com.jnydam.springreader;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication
@EnableMongoRepositories
public class SpringreaderApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringreaderApplication.class, args);
	}

}
