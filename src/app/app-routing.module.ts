import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', component: TodosListComponent },
  {
    path: 'edit/:id',
    component: TodoEditComponent,
    canActivate: [AuthGuard],
  },
  { path: 'new', component: TodoEditComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
