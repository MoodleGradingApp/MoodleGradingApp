import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { string } from 'yargs';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';

// export interface StudentInfo {
//   "Email address": string,
//   "Feedback comments": string,
//   "Full name": string,
//   "Grade": string,
//   "Grade can be changed": string,
// }

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private ngxCsvParser: NgxCsvParser) { }

  // students: StudentInfo[] = [];
  correctFile: boolean;
  emptyFile: boolean;
  header = true;

  csvRecords: Array<String>[] = [];

  parseFile(fileName: any): boolean {

        // Check for empty CSV file
        if (fileName[0]["size"] > 3) {
          this.emptyFile = false;
        } else {
          this.emptyFile = true;
          this.correctFile =  false;
          console.log("File is empty!")
          return;
        }

        // reference: https://www.npmjs.com/package/ngx-csv-parser
        // Parse the file you want to select for the operation along with the configuration
        this.ngxCsvParser.parse(fileName[0], { header: this.header, delimiter: ',' })
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
            this.getStudents();
          }, (error: NgxCSVParserError) => {
            console.log('Error', error);
          });

    return this.correctFile
  }

  updateFeedback(feedback: string, studentIndex: number) {
    // update index student # feedback
  }

  // addToDb(student: Students) {
  //   this.students.push(student);
  // }

  getStudents() {
    console.log("getStudents() results: " + this.csvRecords);
    // return this.students;
  }

  clearStudents() {
    // this.students = [];
    // return this.students;
  }

}
