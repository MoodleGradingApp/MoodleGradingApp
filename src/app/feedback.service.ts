import { Injectable } from '@angular/core';
import { Observable, of, Subscription, throwError } from 'rxjs';
import { string } from 'yargs';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
import { ThisReceiver } from '@angular/compiler';
import * as dayjs from 'dayjs';

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

  // Make a download button
  public exportCSV() {
    // Get the assignment title
    let title = (<HTMLInputElement>document.getElementById('title')).value;
    
    // Remove forbidden characters from assignment title
    title = title.replace('#','').replace('<','').replace('>','').replace('$','').replace('%','');
    title = title.replace('!','').replace('&','').replace('*','').replace('\'','').replace('"','');
    title = title.replace('?','').replace('\\','').replace('/','').replace('{','').replace('}','');
    title = title.replace(':','').replace(' ','_').replace('@','').replace('+','').replace('`','');
    title = title.replace('|','').replace('=', '');

    // If title is not provided assign default title 'assignment'
    if (title == '') {
      title = "assignment";
    }

    // Get current date and time
    let currentDateTime = dayjs().format('_YYYY-MM-DD_HHmmss');

    // Pass string into handle for data-table
    let my_data_string = this.buildCSV(this.students);
    
    // Create an href element in the DOM
    let a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);

    // Create object of type csv text file
    let blob = new Blob([my_data_string], { type: 'text/csv' });
    let url = window.URL.createObjectURL(blob);
    
    // Pass URL to hyper-reference csv onclick
    a.href = url;

    // Apply custom name to file download
    a.download = title + currentDateTime + '.csv';
    a.click();
  }

  // This manually constructs our CSV file string
  private buildCSV(objArray: any): string {
    let my_data = objArray;
    let csv_file = '';

    // create header row
    let row = 'Identifier,Full name,Email address,Status,Grade,Maximum Grade,Grade can be changed,Last modified (submission),Online text,Last modified (grade),Feedback comments'

    // Add row and newline + carriage-return
    csv_file += row + '\r\n';

    // Build and add lines to csv_file
    for (let i = 0; i < my_data.length; i++) {
        let line = '';
        for (let index in my_data[i]) {
          if (line != '') {
            line += ','
          }
          if (index == 'gradeLastModified' || index == 'submissionLastModified') {
            line += '"' + my_data[i][index] + '"'
          } else if (index == 'feedbackBoolean') {
            let feedbackString = this.parseFeedbackCSV(my_data[i][index])
            line += '"' + feedbackString + '"'
            console.log("Return from function:" + my_data[i][index])
          } 
          else {
            line += my_data[i][index];
          }
          
        }
        csv_file += line + '\r\n';
    }

    // End of file
    return csv_file;
  }

  private parseFeedbackCSV(feedback: Array<boolean>): string {
    let feedbackStringArray = []
    let feedbackString = ''
    for (var n = 0; n < this.feedback.length; n++) {
      if (feedback[n] == true) {
        feedbackStringArray.push(this.feedback[n].feedback)
      }
      feedbackString = feedbackStringArray.join('; ')
    }
    return feedbackString;
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
        identifier: parseResult[i]["Identifier"],
        fullName: parseResult[i]["Full name"],
        email: parseResult[i]["Email address"][0],
        status: parseResult[i]["Status"],
        grade: parseResult[i]["Grade"],
        maxGrade: parseResult[i]["Maximum Grade"],
        gradeChange: parseResult[i]["Grade can be changed"],
        submissionLastModified: parseResult[i]["Last modified (submission)"],
        onlineText: parseResult[i]["Online text"],
        gradeLastModified: parseResult[i]["Last modified (grade)"],
        feedbackBoolean: [false]
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
    // delete feedback in students' boolean feedback arrays
    for (var i = 0; i < this.csvRecords.length; i++) {
      if (this.students[i].feedbackBoolean[index] == true) {
        // add deduction value to student grade before delete
        var newGrade = parseFloat(this.students[i].grade) + this.feedback[index].deduction
        this.students[i].grade = newGrade.toString();
      }
      this.students[i].feedbackBoolean.splice(index,1);
    }

    // remove 1 element at index
    this.feedback.splice(index,1);
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

    var newGrade = parseFloat(this.maxScore) - totalDeductions
    // if score is not an int round to 1 decimal place
    var result = (newGrade - Math.floor(newGrade)) !== 0;
    if (result) {
      newGrade = parseFloat(newGrade.toFixed(1));
    }
    
    this.students[studentIndex].grade = newGrade.toString();
  }

  perfectGrade(studentIndex: number): void {
    this.students[studentIndex].grade = this.maxScore;
    // set all boolean feedback to false
    for (var n = 0; n < this.feedback.length; n++) {
      this.students[studentIndex].feedbackBoolean[n] = false;
    }
  }

  clearGrade(studentIndex:number): void {
    this.students[studentIndex].grade = "";
    // set all boolean feedback to false
    for (var n = 0; n < this.feedback.length; n++) {
      this.students[studentIndex].feedbackBoolean[n] = false;
    }
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

  updateChartData(): Array<number> {
    var chartData: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // loop through each student to put data into histogram
    for (var i = 0; i < this.csvRecords.length; i++) {
      if (this.students[i].grade != "") {
        var numGrade: number = Math.round((parseFloat(this.students[i].grade) / parseFloat(this.maxScore)) * 100);
        console.log(parseFloat(this.maxScore));
        // console.log(numGrade);
        // make sure in range 0 to 100
        if (numGrade >= 0 && numGrade <= 100) {
          if (numGrade <= 9) {
            // 0 to 9
            chartData[0] += 1;
          } else if (numGrade <= 19) {
            // 10 to 19
            chartData[1] += 1;
          } else if (numGrade <= 29) {
            // 20 to 29
            chartData[2] += 1;
          } else if (numGrade <= 39) {
            // 30 to 39
            chartData[3] += 1;
          } else if (numGrade <= 49) {
            // 40 to 49
            chartData[4] += 1;
          } else if (numGrade <= 59) {
            // 50 to 59
            chartData[5] += 1;
          } else if (numGrade <= 69) {
            // 60 to 69
            chartData[6] += 1;
          } else if (numGrade <= 79) {
            // 70 to 79
            chartData[7] += 1;
          } else if (numGrade <= 89) {
            // 80 to 89
            chartData[8] += 1;
          } else if (numGrade <= 100) {
            // 90 to 100
            chartData[9] += 1;
          }
        }
      }
    }
    return chartData;
  }
}
