import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { string } from 'yargs';

export interface Students {
  "Email address": string,
  "Feedback comments": string,
  "Full name": string,
  "Grade": string,
  "Grade can be changed": string,
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  students: Students[] = [];

  addToDb(student: Students) {
    this.students.push(student);
  }

  getStudents() {
    console.log(this.students);
    return this.students;
  }

  clearStudents() {
    this.students = [];
    return this.students;
  }

}
