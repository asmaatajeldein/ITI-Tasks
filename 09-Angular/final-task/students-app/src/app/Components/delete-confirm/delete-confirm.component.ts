import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {

  studentID:number;
  studentData:any;

  constructor(private myService:StudentsService, private myRoute:ActivatedRoute, private router:Router) {
    // console.log(this.myRoute.snapshot.params["id"]);
    this.studentID = this.myRoute.snapshot.params["id"];
  }

  ngOnInit() {
    this.myService.GetStudent(this.studentID).subscribe({
      next: (data) => {
        this.studentData = data;
      },
      error: err => console.log(err)
    })
  }

  deleteStudent() {
    this.myService.DeleteStudent(this.studentID).subscribe({
      error: err => console.log(err)
    })

  this.router.navigateByUrl('/').then(
      () => {this.router.navigateByUrl('/loading', {skipLocationChange: true})});

    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 500);
  }
}
