package com.maijsp.rest.webservices.resfulwebservices.helloworld;

import com.maijsp.rest.webservices.resfulwebservices.todos.Todo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class HelloWorldController {
    @GetMapping(path = "/basicauth")
    public AuthenticationBean helloBasicAuthen() {
        return new AuthenticationBean("You are authenticated!");
    }

    @GetMapping(path = "/hello-world/path-variable/{username}")
    public HelloWorldBean helloWorldBean(@PathVariable String username) {
        return new HelloWorldBean(username);
    }
}
