import { Component } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})



export class TodolistComponent {

  todos: Todo[] = [];
  error:string = '';

  constructor() {
    this.todos.forEach(t => {
      t.oldDesc = t.desc
    }
    );
  }

  editToDo(todo: Todo) {
    todo.editable = !todo.editable;
    todo.oldDesc = todo.desc;
  }
  deleteTodo(id: string) {
    this.todos = this.todos.filter(t => t.id != id)
  }
  cancelEdit(todo: Todo) {
    todo.editable = false
    todo.desc = todo.oldDesc;
  }

  createToDo(input: HTMLInputElement) {
    if (input.value.length > 2) {
      this.todos.push(
        new Todo(input.value)
      )
      input.value = '';
    }
    else{
      this.error = 'Vous devez saisir au minimum 3 caractères !';
      setTimeout(()=>this.error = '',2000);
    }
  }
}



