import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ViewChild, } from '@angular/core';
import { Subject } from 'rxjs';
import { CsvParserComponent } from './csv-parser/csv-parser.component';
import { FeedbackService } from './feedback.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  // listen to parent event 'next' or 'previous' student button clicked
  eventsSubject: Subject<void> = new Subject<void>();

  public feedbackArray: FormArray;
  public feedbackForm: FormGroup;
  currentStudentName: String;

  // member variable, type of child component class
  @ViewChild('next') csvChildComponent:CsvParserComponent

  csvRecords: any[] = [];
  header: boolean = false;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
       feedbackArray: this.fb.array([ this.createFeedback() ]),
    });
  }

  get feedbackControls() {
    return this.feedbackForm.get('feedbackArray')['controls'];
  }

  createFeedback(): FormGroup {
    return this.fb.group({
      feedback: '',
    });
  }

  removeFeedback(i: number):void {
    this.feedbackArray.removeAt(i);
  }

  addFeedback(): void {
    this.feedbackArray = this.feedbackForm.get('feedbackArray') as FormArray;
    this.feedbackArray.push(this.createFeedback());
  }

  currentStudent(studentData:string):void {
    this.currentStudentName = studentData;
  }

  nextStudent(): void {
    // call function from child component
    this.csvChildComponent.studentParser(1);
  }

  previousStudent(): void {
    // call function from child component
    this.csvChildComponent.studentParser(-1);
  }
}
