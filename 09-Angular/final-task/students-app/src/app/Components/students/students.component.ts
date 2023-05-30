import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students:any;
  // targetModalID:any;

  constructor(private myService:StudentsService) {}

  ngOnInit() {
    console.log(this.myService.GetAllStudents());
    this.myService.GetAllStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (err) => {console.log(err)}
    })
  }

  /* get TargetModalID() {
    return this.targetModalID;
  }

  detectButton(e:any) {
    let targetModal = e.target.getAttribute("data-bs-target");
    this.targetModalID = targetModal.slice(1);
  } */
}
