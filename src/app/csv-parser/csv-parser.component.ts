import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
import { ViewChild, Component, OnInit, EventEmitter, Output, Input } from '@angular/core'
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss']
})
export class CsvParserComponent {
  // communicate with parent that the selected student has changed
  @Output() public selectedStudent = new EventEmitter<String>();

  currentStudentIndex: number = -1;

  correctFile: boolean;
  emptyFile: boolean;
  isRowSelected: boolean =  false;
  previousRow: number = 2;

  csvRecords: Array<String>[] = [];
  usernames: String[] = [];
  header = true;
  selectedUser: Array<String>[] = [];

  studentRow: string[] = ['i', 'name', 'email', 'timestamp', 'grade', 'feedback'];

  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;

    console.log("File size: ", files[0]["size"]);

    // Check for empty CSV file
    if (files[0]["size"] > 3) {
      this.emptyFile = false;
    } else {
      this.emptyFile = true;
      this.correctFile =  false;
      console.log("File is empty!")
      return;
    }

    // reference: https://www.npmjs.com/package/ngx-csv-parser
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {
        console.log('Parser Result', result);
        this.csvRecords = result;

        // check headers if correct CSV file
        if (this.csvRecords[0]["Email address"] === undefined ||
        this.csvRecords[0]["Feedback comments"] === undefined ||
        this.csvRecords[0]["Full name"] === undefined ||
        this.csvRecords[0]["Grade"] === undefined ||
        this.csvRecords[0]["Grade can be changed"] === undefined ||
        this.csvRecords[0]["Identifier"] === undefined ||
        this.csvRecords[0]["Last modified (grade)"] === undefined ||
        this.csvRecords[0]["Last modified (submission)"] === undefined ||
        this.csvRecords[0]["Maximum Grade"] === undefined ||
        this.csvRecords[0]["Online text"] === undefined ||
        this.csvRecords[0]["Status"] === undefined) {
          console.log("Wrong CSV File!");
          this.correctFile = false;
        } else {
          this.correctFile = true;
        }

        if (this.correctFile === true) {
          // return only Calvin username, get rid of '@students.calvin.edu'
          console.log(this.csvRecords.length);
          for (let i = 0; i < this.csvRecords.length; i++) {
            this.csvRecords[i]["Email address"] = this.csvRecords[i]["Email address"].split("@", 1);
          }
        }
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }

  ngOnInit(): void {
    // no-op
  }

  highlightRow(row:number) {
    // add 'selected' class to tr element
    var trs = document.querySelectorAll("tr");
    if (this.isRowSelected === false) {
      this.isRowSelected = true;
    } else {
      trs[this.previousRow+2].classList.remove("selected");
    }
    trs[row+2].classList.add("selected");
    this.previousRow = row;
  }

  rowSelected(index:number) {
    this.currentStudentIndex = index;
    this.selectedStudent.emit(this.csvRecords[index]["Full name"]);
  }

  studentParser(incriment: number): void {
    if (this.currentStudentIndex === 0 && incriment === -1 || this.currentStudentIndex === this.csvRecords.length-1 && incriment === 1) {
      return
    }
    this.currentStudentIndex = this.currentStudentIndex + incriment;
    this.rowSelected(this.currentStudentIndex);
    this.highlightRow(this.currentStudentIndex);
    console.log("Current Student: " + this.csvRecords[this.currentStudentIndex]["Full name"]);
  }
}