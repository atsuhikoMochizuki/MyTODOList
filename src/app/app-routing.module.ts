import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { ContactComponent } from "./components/contact/contact.component";
import { TodosComponent } from "./components/todos/todos.component";



const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'presentation', component: PresentationComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'todos', component: TodosComponent},
    { path:'', redirectTo: 'home', pathMatch: 'full'},
    { path:'**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[AppRoutingModule]
})
export class AppRoutingModule{

}
