import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly BASE_URL = 'http://localhost:3000/students';

  constructor(private readonly myClient: HttpClient) { }

  GetAllStudents() {
    return this.myClient.get(this.BASE_URL);
  }

  GetStudent(id: number) {
    return this.myClient.get(this.BASE_URL + "/" + id);
  }

  AddStudent(body: any) {
    return this.myClient.post(this.BASE_URL, body);
  }

  DeleteStudent(id: number) {
    return this.myClient.delete(this.BASE_URL + "/" + id);
  }

  EditStudent(id: number, body: any) {
    return this.myClient.patch(this.BASE_URL + "/" + id, body);
  }
}
