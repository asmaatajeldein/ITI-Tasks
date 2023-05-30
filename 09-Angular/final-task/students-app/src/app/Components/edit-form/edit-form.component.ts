import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  studentID: number;
  studentData: any;
  studentValidation = new FormGroup({
    name: new FormControl([Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl([Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
    birthdate: new FormControl([Validators.required]),
    gender: new FormControl([Validators.required]),
    major: new FormControl([Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    gpa: new FormControl([Validators.required, Validators.min(0), Validators.max(4)]),
  });

  constructor(private myRoute: ActivatedRoute, private router: Router, private myService: StudentsService) {
    this.studentID = myRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.myService.GetStudent(this.studentID).subscribe({
      next: (data) => {
        this.studentData = data;

        this.studentValidation.setValue({
          name: this.studentData.name,
          email: this.studentData.email,
          birthdate: this.studentData.birthdate,
          gender: this.studentData.gender,
          major: this.studentData.major,
          gpa: this.studentData.gpa
        })

        console.log(this.studentValidation);
      },
      error: (err) => { console.log(err) }
    })
  }

  get NameValid() {
    return this.studentValidation.controls['name'].valid
  }

  get EmailValid() {
    return this.studentValidation.controls['email'].valid
  }

  get BirthdateValid() {
    return this.studentValidation.controls['birthdate'].valid
  }

  get GenderValid() {
    return this.studentValidation.controls['gender'].valid
  }

  get MajorValid() {
    return this.studentValidation.controls['major'].valid
  }

  get GpaValid() {
    return this.studentValidation.controls['gpa'].valid
  }

  editStudent() {
    if (this.studentValidation.valid) {
      this.myService.EditStudent(this.studentID, this.studentValidation.value).subscribe({
        error: err => console.log(err)
      })
    }

    this.router.navigateByUrl('/').then(
      () => {this.router.navigateByUrl('/loading', {skipLocationChange: true})});

    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 500);
  }
}
