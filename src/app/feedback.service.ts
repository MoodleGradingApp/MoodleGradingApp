import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { string } from 'yargs';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';

export interface StudentInfo {
  email: string,
  feedback: string,
  fullName: string,
  grade: string,
  gradeChange: string,
  identifier: string,
  gradeLastModified: string,
  submissionLastModified: string,
  maxGrade: string,
  onlineText: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private ngxCsvParser: NgxCsvParser) { }

  private students: StudentInfo[] = [];

  public correctFile: boolean;
  public emptyFile: boolean;
  private newStudent: StudentInfo;
  private header = true;

  csvRecords: Array<String>[] = [];

  parseFile(fileName: any) {

    // Check for empty CSV file
    if (fileName[0]["size"] > 3) {
      this.emptyFile = false;
    } else {
      this.emptyFile = true;
      this.correctFile = false;
      this.clearStudents()
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
        if (
          this.csvRecords[0] === undefined ||
          this.csvRecords[0]["Email address"] === undefined ||
          this.csvRecords[0]["Feedback comments"] === undefined ||
          this.csvRecords[0]["Full name"] === undefined ||
          this.csvRecords[0]["Grade"] === undefined ||
          this.csvRecords[0]["Grade can be changed"] === undefined ||
          this.csvRecords[0]["Identifier"] === undefined ||
          this.csvRecords[0]["Last modified (grade)"] === undefined ||
          this.csvRecords[0]["Last modified (submission)"] === undefined ||
          this.csvRecords[0]["Maximum Grade"] === undefined ||
          this.csvRecords[0]["Online text"] === undefined ||
          this.csvRecords[0]["Status"] === undefined)
        {
          console.log("Wrong CSV File!");
          this.correctFile = false;
        } else {
          this.correctFile = true;
        }

        if (this.correctFile === true) {
          // return only Calvin username, get rid of '@students.calvin.edu'
          // console.log(this.csvRecords.length);
          for (let i = 0; i < this.csvRecords.length; i++) {
            this.csvRecords[i]["Email address"] = this.csvRecords[i]["Email address"].split("@", 1);
          }
        }
        this.getStudents(this.csvRecords);
        // console.log("after getStudents()", this.students);
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }

  private updateFeedback(feedback: string, studentIndex: number) {
    this.students[studentIndex].feedback.concat(feedback);
  }

  private getStudents(parseResult: Array<String>[]) {
    console.log("Here now: ", parseResult[0]["Email address"])
    if (parseResult[0]["Email address"] === undefined) {
      this.students = [];
    } else {
      for ( var i = 0; i < this.csvRecords.length; i++) {
        this.newStudent = {
          email: parseResult[i]["Email address"][0],
          feedback: parseResult[i]["Feedback comments"],
          fullName: parseResult[i]["Full name"],
          grade: parseResult[i]["Grade"],
          gradeChange: parseResult[i]["Grade can be changed"],
          identifier: parseResult[i]["Identifier"],
          gradeLastModified: parseResult[i]["Last modified (grade)"],
          submissionLastModified: parseResult[i]["Last modified (submission)"],
          maxGrade: parseResult[i]["Maximum Grade"],
          onlineText: parseResult[i]["Online text"],
          status: parseResult[i]["Status"]
        }
        this.students.push(this.newStudent)
      }
    }
    console.log("after getStudents: ", this.students);
  }

  clearStudents() {
    this.students = [];
  }

  fillChart(): StudentInfo[] {
    console.log("what the service is returning: ", this.students)
    var validFile: boolean
    if (this.students.length == 0) {
      validFile = false
      console.log("Here FALSE!!!!!!!!!")
      // this.correctFile = false
    } else {
      validFile = true
      console.log("Here TRUEEEEE!!!!!!!!!")
      // this.correctFile = true
    }
    return this.students;
  }
}
