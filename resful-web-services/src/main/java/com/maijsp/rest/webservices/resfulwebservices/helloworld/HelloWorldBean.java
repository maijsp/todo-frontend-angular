package com.maijsp.rest.webservices.resfulwebservices.helloworld;

import org.springframework.context.annotation.Bean;

public class HelloWorldBean {
    private String message;
    public HelloWorldBean(String message) {
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
}
