import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SideNavComponent } from './Components/side-nav/side-nav.component';
import { StudentsComponent } from './Components/students/students.component';
import { ErrorComponent } from './Components/error/error.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { EditFormComponent } from './Components/edit-form/edit-form.component';
import { AddFormComponent } from './Components/add-form/add-form.component';
import { DeleteConfirmComponent } from './Components/delete-confirm/delete-confirm.component';
import { RefreshComponent } from './Components/refresh/refresh.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    StudentsComponent,
    ErrorComponent,
    StudentDetailsComponent,
    EditFormComponent,
    AddFormComponent,
    DeleteConfirmComponent,
    RefreshComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
