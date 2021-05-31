import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public feedbackArray: FormArray;
  public feedbackForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
       feedbackArray: this.fb.array([ this.createFeedback() ])
    });
  }

  get feedbackControls() {
    return this.feedbackForm.get('feedbackArray')['controls'];
  }

  createFeedback(): FormGroup {
    return this.fb.group({
      selected: false,
      feedback: '',
      deduction: 0,
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