import { Injectable } from '@angular/core';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { string } from 'yargs';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
import { ThisReceiver } from '@angular/compiler';

export interface StudentInfo {
  email: string,
  feedbackBoolean: Array<boolean>,
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

export interface HomeworkFeedback {
  feedback: string,
  deduction: number
}

export interface FeedbackStrings {
  strings: Array<String>
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private ngxCsvParser: NgxCsvParser) { }

  private students: StudentInfo[] = [];
  private feedback: HomeworkFeedback[] = [];
  private feedbackString: FeedbackStrings[] = [];

  public correctFile: boolean;
  public maxScore: string;

  private newStudent: StudentInfo;
  private newFeedBack: HomeworkFeedback;
  private newFeedbackString: FeedbackStrings;
  private header = true;

  csvRecords: Array<String>[] = [];

  parseFile(fileName: any) : Observable<any[] | NgxCSVParserError | string> {

    // Check for empty CSV file
    if (fileName[0]["size"] > 3) {
      this.correctFile = true;
    } else {
      this.correctFile = false;
      this.clearStudents()
      return of("File is empty");
    }

    // reference: https://www.npmjs.com/package/ngx-csv-parser
    // Parse the file you want to select for the operation along with the configuration
    let response = this.ngxCsvParser.parse(fileName[0], { header: this.header, delimiter: ',' })
    return response;
  }

  parseCSV(result: Array<any>) {
    // console.log('Parser Result', result);
    this.csvRecords = result;

    // check headers if correct CSV file
    if (
      result[0] === undefined ||
      result[0]["Identifier"] === undefined ||
      result[0]["Email address"] === undefined ||
      result[0]["Feedback comments"] === undefined ||
      result[0]["Full name"] === undefined ||
      result[0]["Grade"] === undefined ||
      result[0]["Grade can be changed"] === undefined ||
      result[0]["Identifier"] === undefined ||
      result[0]["Last modified (grade)"] === undefined ||
      result[0]["Last modified (submission)"] === undefined ||
      result[0]["Maximum Grade"] === undefined ||
      result[0]["Online text"] === undefined ||
      result[0]["Status"] === undefined)
    {
      console.log("Wrong CSV File!");
      this.correctFile = false;
      this.clearStudents();
    } else {
      console.log("Correct CSV File!");
      this.correctFile = true;
      this.getStudents(this.csvRecords);
    }
  }

  private getStudents(parseResult: Array<String>[]) {

    // return only Calvin username
    for (let i = 0; i < parseResult.length; i++) {
      parseResult[i]["Email address"] = this.csvRecords[i]["Email address"].split("@", 1);
    }

    // put csv-parser results into newStudent[]
    for ( var i = 0; i < this.csvRecords.length; i++) {
      // initialize each student object
      this.newStudent = {
        email: parseResult[i]["Email address"][0],
        feedbackBoolean: [false],
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
      this.students.push(this.newStudent);
      // initialize each students' feedback strings
      this.newFeedbackString = {
        strings: []
      }
      this.feedbackString.push(this.newFeedbackString);
    }

    // set assignment max score
    this.maxScore = this.students[0].maxGrade;
  }

  clearStudents() {
    this.students = [];
  }

  fillChart(): StudentInfo[] {
    return this.students;
  }

  feeedbackCreate(feedbackString: string, points: number): void {
    this.newFeedBack = {
      feedback: feedbackString,
      deduction: points
    }
    this.feedback.push(this.newFeedBack);

    // add this feedback to the student feedback array as false
    for (var i = 0; i < this.csvRecords.length; i++) {
      this.students[i].feedbackBoolean.push(false);
    }
  }

  feedbackRead(): HomeworkFeedback[] {
    return this.feedback;
  }

  feedbackStringUpdate(index: number, feedbackString: string): void {
    // update values in feedback array
    this.feedback[index].feedback = feedbackString;
  }

  feedbackDeductionUpdate(index: number, points: number): void {
    this.feedback[index].deduction = points;
    for (var i = 0; i < this.csvRecords.length; i++) {
      if (this.students[i].feedbackBoolean[index] == true) {
        this.gradeUpdate(i);
      }
    }
  }

  feedbackDelete(index: number): void {
    // remove 1 element at index
    this.feedback.splice(index,1);
    // delete feedback in students' boolean feedback arrays
    for (var i = 0; i < this.csvRecords.length; i++) {
      this.students[i].feedbackBoolean.splice(index,1);
      if (this.students[i].feedbackBoolean[index] == true) {
        this.gradeUpdate(i);
      }
    }
  }
  
  feedbackApply(feedbackIndex: number, studentIndex: number): void {
    this.students[studentIndex].feedbackBoolean[feedbackIndex] = true;
    // update grade
    this.gradeUpdate(studentIndex);
  }

  feedbackUnapply(feedbackIndex: number, studentIndex: number): void {
    this.students[studentIndex].feedbackBoolean[feedbackIndex] = false;
    this.gradeUpdate(studentIndex);
  }

  gradeUpdate(studentIndex: number): void {
    var totalDeductions = 0;
    for (var n = 0; n < this.feedback.length; n++) {
      if (this.students[studentIndex].feedbackBoolean[n] == true) {
        totalDeductions = totalDeductions + this.feedback[n].deduction;
      }
    }

    var newGrade = parseInt(this.maxScore) - totalDeductions
    this.students[studentIndex].grade = newGrade.toString();
  }

  getFeedbackStrings(): FeedbackStrings[] {
    for (var i = 0; i < this.csvRecords.length; i++) {
      this.feedbackString[i].strings.splice(0, this.feedbackString[i].strings.length);
      for (var n = 0; n < this.feedback.length; n++) {
        if (this.students[i].feedbackBoolean[n] == true) {
          this.feedbackString[i].strings.push(this.feedback[n].feedback);
        }
      }
    }
    return this.feedbackString;
  }
}
