import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './Components/students/students.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { EditFormComponent } from './Components/edit-form/edit-form.component';
import { DeleteConfirmComponent } from './Components/delete-confirm/delete-confirm.component';
import { AddFormComponent } from './Components/add-form/add-form.component';
import { RefreshComponent } from './Components/refresh/refresh.component';

const routes:Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'students',
  component: StudentsComponent,
  children: [
    {path: ':id', component: StudentDetailsComponent},
    {path: 'edit/:id', component: EditFormComponent},
    {path: 'delete/:id', component: DeleteConfirmComponent}
  ]},
  {path: 'add', component: AddFormComponent},
  {path: 'loading', component: RefreshComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
