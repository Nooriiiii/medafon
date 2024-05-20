import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [AppComponent, TodosListComponent, TodoEditComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
