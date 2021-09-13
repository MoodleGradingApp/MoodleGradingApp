import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
import { ViewChild, Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { Subscription, Observable } from 'rxjs';
import { FeedbackService, StudentInfo } from '../feedback.service';

@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss']
})
export class CsvParserComponent {
  // communicate with parent that the selected student has changed
  @Output() public selectedStudent = new EventEmitter<String>();

  // feedback service
  // feedbackService: FeedbackService[] = [];

  validFile: boolean;
  emptyFile: boolean;

  currentStudentIndex: number = -1;

  isRowSelected: boolean =  false;
  previousRow: number = 2;

  csvRecords: StudentInfo[] = [];
  usernames: String[] = [];
  header = true;
  selectedUser: Array<String>[] = [];

  // studentRow: string[] = ['i', 'name', 'email', 'timestamp', 'grade', 'feedback'];

  constructor(private feedbackService: FeedbackService) {
    // no-op
  }

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any) {

    // Select the file from the event
    const file = $event.srcElement.files;

    console.log("File size: ", file[0]["size"]);

    this.feedbackService.parseFile(file);

    this.csvRecords = this.feedbackService.fillChart();

    console.log(this.feedbackService.correctFile);
    this.validFile = this.feedbackService.correctFile
    console.log("correct File? ", this.validFile)
    console.log("component: ", this.csvRecords);

    // if (this.csvRecords == null) {
    //   this.validFile = false;
    // } else {
    //   this.validFile = true;
    // }
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
    this.selectedStudent.emit(this.csvRecords[index].fullName);
    console.log("Added students: ");
  }

  studentParser(incriment: number): void {
    if (this.currentStudentIndex === 0 && incriment === -1 || this.currentStudentIndex === this.csvRecords.length-1 && incriment === 1) {
      return
    }
    this.currentStudentIndex += incriment;
    this.rowSelected(this.currentStudentIndex);
    this.highlightRow(this.currentStudentIndex);
    console.log("Current Student: " + this.csvRecords[this.currentStudentIndex]["Full name"]);
  }
}