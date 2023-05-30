import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit{

  studentID:number;
  studentData:any;

  constructor(private myRoute:ActivatedRoute, private myService:StudentsService) {
    this.studentID = this.myRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.myService.GetStudent(this.studentID).subscribe({
      next: (data) => {
        this.studentData = data;
      },
      error: (err) => {console.log(err)}
    })
  }
}
