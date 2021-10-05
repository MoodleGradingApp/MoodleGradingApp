import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ViewChild, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';
import { DynamicGrid } from './grid.model';
import { FeedbackService, FeedbackStrings, HomeworkFeedback, StudentInfo } from './feedback.service';
import { event } from 'cypress/types/jquery';

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
  public maxScore: String;
  public feedbackInputText: String;

  public feedbackText: String = '';

  validFile: boolean = true;
  currentStudentName: String;
  currentStudentIndex: number = -1;
  isRowSelected: boolean =  false;
  previousRow: number = 2;
  selectedUser: Array<String>[] = [];
  studentRow: string[] = ['i', 'name', 'email', 'timestamp', 'grade', 'feedback'];

  csvRecords: StudentInfo[];
  feedback: HomeworkFeedback[];
  feedbackStrings: FeedbackStrings[] = [];
  header: boolean = false;

  dynamicArray: Array<DynamicGrid> = [];  
  newDynamic: any = {}; 

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
    this.newDynamic = {feedback: "", deduction:"", selected:""};  
    this.dynamicArray.push(this.newDynamic);
    this.feedbackService.feeedbackCreate(null, null);
  }

  async fileChangeListener ($event: any) {
    // Select the file from the event
    const file = $event.srcElement.files;
    // wait for this to return
    await this.feedbackService.parseFile(file).subscribe(
      result => {
        if (result instanceof Array) {
          this.feedbackService.parseCSV(result)
          this.csvRecords = this.feedbackService.fillChart();
          this.validFile = this.feedbackService.correctFile;
          if (this.validFile) {
            this.maxScore = this.feedbackService.maxScore;
            // get feedback strings to display
            this.feedbackStrings = this.feedbackService.getFeedbackStrings();
          } else {
            this.maxScore = null;
            console.log('Error Bad CSV');
          }
        } else {
          // handle empty CSV
          this.maxScore = null;
          this.validFile = false;
          this.csvRecords = [];
          console.log('Error', result);
        }
      }
    )    
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
      trs[this.previousRow].classList.remove("selected");
    }
    trs[row].classList.add("selected");
    this.previousRow = row;
  }

  rowSelected(index:number) {
    this.currentStudentIndex = index;
    this.currentStudentName = this.csvRecords[index].fullName;
    this.maxScore = this.csvRecords[0].maxGrade;
    // code to check boxes off when on a certain student
    this.updateCheckboxState();
    // console.log(this.csvRecords);
  }

  updateCheckboxState() {
    for (var i = 0; i < this.csvRecords[this.currentStudentIndex].feedbackBoolean.length; i++) {
      var checkbox = document.getElementById("checkbox" + i.toString()) as HTMLInputElement;
      if (this.csvRecords[this.currentStudentIndex].feedbackBoolean[i] === true) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    }
  }

  studentParser(incriment: number): void {
    if (this.currentStudentIndex === 0 && incriment === -1 || this.currentStudentIndex === this.csvRecords.length-1 && incriment === 1) {
      return
    }
    this.currentStudentIndex += incriment;
    this.rowSelected(this.currentStudentIndex);
    this.highlightRow(this.currentStudentIndex);
    this.validFile = this.feedbackService.correctFile
  }

  nextStudent(): void {
    this.studentParser(1);
  }

  previousStudent(): void {
    if(this.currentStudentIndex > 0) {
      this.studentParser(-1); 
    }
  }

  addRow() {    
    this.newDynamic = {feedback: "", deduction:"", selected:""};  
    this.dynamicArray.push(this.newDynamic);  
    // create another feedback object
    this.feedbackService.feeedbackCreate(null, null)
    console.log(this.dynamicArray);  
    return true;  
  } 

  deleteRow(index: number) {  
    if(this.dynamicArray.length == 1) {  
      console.log("Can't delete the row when there is one one row!");  
      return false;  
    } else {  
      this.dynamicArray.splice(index, 1);  
      this.feedbackService.feedbackDelete(index);
      // update students' feedback string display
      this.feedbackStrings = this.feedbackService.getFeedbackStrings();
      return true;  
    }  
  }

  onFeedbackChange(newValue: string, index: number) {
    this.feedbackService.feedbackStringUpdate(index, newValue);
    // update students' feedback string display
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
  }

  onDeductionChange(newValue: number, index: number) {
    this.feedbackService.feedbackDeductionUpdate(index, newValue);
  }

  onSelectedChange(newValue: boolean, feedbackIndex: number) {
    if (newValue === true) {
      this.feedbackService.feedbackApply(feedbackIndex, this.currentStudentIndex);
    } else {
      this.feedbackService.feedbackUnapply(feedbackIndex, this.currentStudentIndex);
    }
    // update students' feedback string display
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
  }

  perfectScore() {
    if(this.currentStudentIndex > 0) {
      this.feedbackService.perfectGrade(this.currentStudentIndex);
    }
    this.updateCheckboxState();
    // update students' feedback string display
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
  }

  clearScore() {
    if(this.currentStudentIndex > 0) {
      this.feedbackService.clearGrade(this.currentStudentIndex);
    }
    this.updateCheckboxState();
    // update students' feedback string display
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();   
  }

  // To Do: Delete Later! Useful for Debugging!
  tempFunction() {
    this.feedback = this.feedbackService.feedbackRead();
    console.log(this.feedback);
    console.log(this.csvRecords);
  }
}
