import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public targetDate: Date,
    public completed: boolean
  ) {} 
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  todos: Todo[] = [];
  deleteSuccess: boolean = false

  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('maijsp').subscribe(
      (response) => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  deleteTodo(id: number) {
    // this.todoDataService.deleteTodo('maijsp', 1)
    console.log(`delete todo ${id}`);
    this.todoDataService.deleteTodo('maijsp', id).subscribe(
      (response) => {
        console.log(response)
        this.deleteSuccess = true;
        this.refreshTodos()
      }
    )
  }

  updateTodo(id: number) {
    console.log(`update todo ${id}`);
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }
}
