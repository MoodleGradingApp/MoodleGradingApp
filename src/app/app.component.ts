import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public feedbackArray: FormArray;
  public feedbackForm: FormGroup;

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

  removeFeedback(i: number) {
    this.feedbackArray.removeAt(i);
  }

  addFeedback(): void {
    this.feedbackArray = this.feedbackForm.get('feedbackArray') as FormArray;
    this.feedbackArray.push(this.createFeedback());
  }

  
}