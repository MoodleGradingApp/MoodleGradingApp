import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ViewChild, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import { FeedbackService, StudentInfo } from './feedback.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  // What is this????? Ask Michael
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  public feedbackArray: FormArray;
  public feedbackForm: FormGroup;
  public maxScore: number;
  validFile: boolean = true;
  currentStudentName: String;
  currentStudentIndex: number = -1;
  isRowSelected: boolean =  false;
  previousRow: number = 2;
  selectedUser: Array<String>[] = [];
  studentRow: string[] = ['i', 'name', 'email', 'timestamp', 'grade', 'feedback'];

  csvRecords: any[] = [];
  header: boolean = false;

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
    this.feedbackForm = this.fb.group({
       feedbackArray: this.fb.array([ this.createFeedback() ]),
    });
  }

  get feedbackControls() {
    return this.feedbackForm.get('feedbackArray')['controls'];
  }

  fileChangeListener($event: any) {

    // Select the file from the event
    const file = $event.srcElement.files;

    console.log("File size: ", file[0]["size"]);

    // wait for this to return
    this.feedbackService.parseFile(file);

    this.csvRecords = []

    // wait for this to return
    this.csvRecords = this.feedbackService.fillChart();

    // uncomment this once async functions work properly
    // this.maxScore = this.csvRecords[0].maxGrade;

    this.validFile = this.feedbackService.correctFile

    console.log("correct File? ", this.validFile)
  }

  ngOnInit(): void {
    // no-op
  }

  highlightRow(row:number) {
    // add 'selected' class to tr element
    var trs = document.querySelectorAll("tr.csv-data");
    if (this.isRowSelected === false) {
      this.isRowSelected = true;
    } else {
      console.log("Previous Row: " + (this.previousRow));
      trs[this.previousRow].classList.remove("selected");
    }
    trs[row].classList.add("selected");
    console.log("Row: " + (row));
    this.previousRow = row;
  }

  rowSelected(index:number) {
    this.currentStudentIndex = index;
    this.currentStudentName = this.csvRecords[index].fullName;

    // delete this name once async functions solved
    this.maxScore = this.csvRecords[0].maxGrade;
  }

  studentParser(incriment: number): void {
    if (this.currentStudentIndex === 0 && incriment === -1 || this.currentStudentIndex === this.csvRecords.length-1 && incriment === 1) {
      return
    }
    this.currentStudentIndex += incriment;
    this.rowSelected(this.currentStudentIndex);
    this.highlightRow(this.currentStudentIndex);
    console.log("Current Student: " + this.csvRecords[this.currentStudentIndex]["fullName"]);
    this.validFile = this.feedbackService.correctFile

    console.log("DELAY: correct File? ", this.validFile)
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
    console.log("Feedback Array: ", this.feedbackArray);
  }

  nextStudent(): void {
    this.studentParser(1);
  }

  previousStudent(): void {
    this.studentParser(-1);
  }
}
