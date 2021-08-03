package com.maijsp.rest.webservices.resfulwebservices.todos;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRespository extends JpaRepository<Todo, Long> {
    List<Todo> findByUsername(String username);
}
