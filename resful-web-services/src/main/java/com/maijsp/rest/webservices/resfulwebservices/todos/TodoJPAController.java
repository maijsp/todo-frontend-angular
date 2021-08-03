package com.maijsp.rest.webservices.resfulwebservices.todos;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class TodoJPAController {
    private static Logger logger = LoggerFactory.getLogger(TodoJPAController.class);

    @Autowired
    private TodoService todoService;

    @Autowired
    private TodoRespository todoRespository;

    @GetMapping(path = "/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoRespository.findByUsername(username);
        // return todoService.retrieveAllTodos();
    }

    @GetMapping(path = "/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoRespository.findById(id).get();
        // return todoService.findById(id);
    }

    @DeleteMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id) {
        // Todo todo = todoService.deleteById(id);
        todoRespository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping(path = "/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo) {
        // Todo todoUpdated = todoService.save(todo);
        Todo todoUpdated = todoRespository.save(todo);
        return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);
    }

    @PostMapping(path = "/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo) {
        System.out.println(todo.toString());

        // Todo createdTodo = todoService.save(todo);
        todo.setUsername(username);
        logger.info(todo.toString());

        Todo createdTodo = todoRespository.save(todo);

        // Location of created resource
        // Get current resource url
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
