import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { ContactComponent } from './components/contact/contact.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { TodoFormsComponent } from './components/todos/todo-forms/todo-forms.component';
import { TodoDetailsComponent } from './components/todos/todo-details/todo-details.component';
import { TodoComponent } from './shared/models/todo/todo.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PresentationComponent,
    ContactComponent,
    TodosComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoFormsComponent,
    TodoDetailsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
