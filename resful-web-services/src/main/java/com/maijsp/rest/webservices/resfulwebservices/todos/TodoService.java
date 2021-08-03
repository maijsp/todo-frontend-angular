package com.maijsp.rest.webservices.resfulwebservices.todos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@Service
public class TodoService {

    @Autowired
    private TodoRespository todoRespository;

    private static List<Todo> todos = new ArrayList<>();
    private static Long idCounter = 3L;

//    static {
//        todos.addAll(Arrays.asList(
//                new Todo(1L, "maijsp","Learn to Dance", new Date(), false),
//                new Todo(2L, "maijsp","Become an expert with Angular", new Date(), false),
//                new Todo(3L, "maijsp","Visit Thailand", new Date(), true)
//        ));
//    }
    public List<Todo> retrieveAllTodos() {
        return todoRespository.findAll();
//        return todos;
    }

    public Todo save(Todo todo) {
        if(todo.getId() == null || todo.getId() == 0 || todo.getId() == -1) {
            todo.setId(++idCounter);
            todos.add(todo);
        } else {
            deleteById(todo.getId());
            todos.add(todo);
        }
        return todo;
    }

    public Todo deleteById(Long id) {
        Todo todo = findById(id);
        if(todo == null) return null;
        if(todos.remove(todo)) {
            return todo;
        }
        return null;
    }

    public Todo findById(Long id) {
        for(Todo todo: todos) {
            if(todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }
}
