import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  addStudentValidation = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z- ]*')]),
    email: new FormControl(null, [Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    birthdate: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    major: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    gpa: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(4), Validators.pattern('[0-9.]*')]),
  });

  constructor(private myService:StudentsService, private router: Router){}

  ngOnInit() {
  }

  get NameValid() {
    return this.addStudentValidation.controls['name'].valid
  }

  get EmailValid() {
    return this.addStudentValidation.controls['email'].valid
  }

  get BirthdateValid() {
    return this.addStudentValidation.controls['birthdate'].valid
  }

  get GenderValid() {
    return this.addStudentValidation.controls['gender'].valid
  }

  get MajorValid() {
    return this.addStudentValidation.controls['major'].valid
  }

  get GpaValid() {
    return this.addStudentValidation.controls['gpa'].valid
  }

  addStudent() {
    if(this.addStudentValidation.valid) {
      this.myService.AddStudent(this.addStudentValidation.value).subscribe();

      this.router.navigateByUrl('/loading');

      setTimeout(() => {
        this.router.navigateByUrl('/')
      }, 500);
    }
  }
}
