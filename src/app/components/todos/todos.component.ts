import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private _todoServices: TodoService) { }

  ngOnInit(): void {
    this.todos = this._todoServices.todos;
    console.log(this.todos);

  }
  
} 