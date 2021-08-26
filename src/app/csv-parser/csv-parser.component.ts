import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
import { ViewChild, Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { Subscription, Observable } from 'rxjs';
import { FeedbackService } from '../feedback.service';

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

  correctFile: boolean;
  emptyFile: boolean;

  currentStudentIndex: number = -1;

  isRowSelected: boolean =  false;
  previousRow: number = 2;

  csvRecords: Array<String>[] = [];
  usernames: String[] = [];
  header = true;
  selectedUser: Array<String>[] = [];

  studentRow: string[] = ['i', 'name', 'email', 'timestamp', 'grade', 'feedback'];

  constructor(private feedbackService: FeedbackService) {
    // no-op
  }

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the file from the event
    const file = $event.srcElement.files;

    console.log("File size: ", file[0]["size"]);

    this.correctFile = this.feedbackService.parseFile(file);
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
    console.log("DB Call: " + this.feedbackService.getStudents);
    this.currentStudentIndex = index;
    this.selectedStudent.emit(this.csvRecords[index]["Full name"]);
    console.log("Added students: ");
    console.log(this.feedbackService.getStudents);
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