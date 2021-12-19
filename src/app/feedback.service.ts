import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
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
  strings: Array<string>
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private ngxCsvParser: NgxCsvParser) { }

  private students: StudentInfo[] = [];                    // store this in temp storage
  private feedback: HomeworkFeedback[] = [];               // store this in temp storage
  private feedbackCount: HomeworkFeedback[] = [];
  private feedbackStrings: FeedbackStrings[] = [];

  public correctFile: boolean;
  public maxScore: string;

  // csvRecords: Array<string>[] = [];

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
    const response = this.ngxCsvParser.parse(fileName[0], { header: true, delimiter: ',' })
    return response;
  }

  parseCSV(csvRecords: Array<any>): void {
    // console.log('Parser Result', result);
    // this.csvRecords = csvRecords;

    // check headers if correct CSV file
    if (
      csvRecords[0] === undefined ||
      csvRecords[0]["Identifier"] === undefined ||
      csvRecords[0]["Email address"] === undefined ||
      csvRecords[0]["Feedback comments"] === undefined ||
      csvRecords[0]["Full name"] === undefined ||
      csvRecords[0]["Grade"] === undefined ||
      csvRecords[0]["Grade can be changed"] === undefined ||
      csvRecords[0]["Identifier"] === undefined ||
      csvRecords[0]["Last modified (grade)"] === undefined ||
      csvRecords[0]["Last modified (submission)"] === undefined ||
      csvRecords[0]["Maximum Grade"] === undefined ||
      csvRecords[0]["Online text"] === undefined ||
      csvRecords[0]["Status"] === undefined) {
      console.log("Wrong CSV File!");
      this.correctFile = false;
      this.clearStudents();
    } else {
      console.log("Correct CSV File!");
      this.correctFile = true;
      this.createStudentsFromCsv(csvRecords);
    }
  }

  // Make a download button
  public exportCSV() {
    // Get the assignment title
    let title = (<HTMLInputElement>document.getElementById('title')).value;

    // Remove forbidden characters from assignment title
    title = title.replace(/[#<>^\-~$%!&*,.;\\"?'\/{}:@+`|=\[\]]/g, '')
    title = title.replace('=', '');

    // If title is not provided assign default title 'assignment'
    if (title === '') {
      title = "assignment";
    }

    // Get current date and time
    const currentDateTime = dayjs().format('_YYYY-MM-DD');

    // Pass string into handle for data-table
    const my_data_string = this.buildCSV(this.students);

    // Create an href element in the DOM
    let a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);

    // Create object of type csv text file
    const blob = new Blob([my_data_string], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    // Pass URL to hyper-reference csv onclick
    a.href = url;

    // Apply custom name to file download
    a.download = title + currentDateTime + '.csv';
    a.click();
  }

  // This manually constructs our CSV file string
  private buildCSV(students: Array<StudentInfo>): string {
    // console.log(JSON.stringify(students, null, 2));
    let my_data = students;
    let csv_file = '';

    // create header row
    const row = 'Identifier,Full name,Email address,Status,Grade,Maximum Grade,Grade can be changed,Last modified (submission),Online text,Last modified (grade),Feedback comments'

    // Add row and newline + carriage-return
    csv_file += row + '\r\n';

    // Build and add lines to csv_file
    for (let i = 0; i < my_data.length; i++) {
        let line = '';
        for (let index in my_data[i]) {
          if (line !== '') {
            line += ','   // do comma-separation
          }
          if (index === 'gradeLastModified' || index === 'submissionLastModified') {
            line += '"' + my_data[i][index] + '"'
          } else if (index == 'feedbackBoolean') {
            let feedbackString = this.createCSVFeedbackString(my_data[i][index])
            // wrap each field in double quotes
            line += '"' + feedbackString + '"'
            // console.log("Return from function:" + my_data[i][index])
          }
          else {
            // console.log('mydata[i][index] = ', my_data[i][index])
            line += my_data[i][index];
          }

        }
        csv_file += line + '\r\n';
    }

    // End of file
    return csv_file;
  }

  private createCSVFeedbackString(feedback: Array<boolean>): string {
    let feedbackStringArray = []
    for (let n = 0; n < this.feedback.length; n++) {
      if (feedback[n]) {
        // if the feedback string has a double quote in it, add an extra one.
        const res = this.feedback[n].feedback.replace(/"/g, '""');
        feedbackStringArray.push("-" + this.feedback[n].deduction + ": " + res)
      }
    }
    const feedbackString = feedbackStringArray.join('; ')
    return feedbackString;
  }

  private createStudentsFromCsv(csvRecords: Array<{}>) {

    // console.log(JSON.stringify(csvRecords, null, 2));

    // put csv-parser results into newStudent[]
    for (let i = 0; i < csvRecords.length; i++) {
      // initialize each student object
      const newStudent: StudentInfo = {
        identifier: csvRecords[i]["Identifier"],
        fullName: csvRecords[i]["Full name"],
        email: csvRecords[i]["Email address"].split("@", 1)[0],  // only the username part
        status: csvRecords[i]["Status"],
        grade: csvRecords[i]["Grade"],
        maxGrade: csvRecords[i]["Maximum Grade"],
        gradeChange: csvRecords[i]["Grade can be changed"],
        submissionLastModified: csvRecords[i]["Last modified (submission)"],
        onlineText: csvRecords[i]["Online text"],
        gradeLastModified: csvRecords[i]["Last modified (grade)"],
        // Could be that the user added multiple feedbacks before loading the csv file
        // (seems unlikely but could be done). So, we need to initialize feedbackBoolean array
        // to have false for each feedback in existence already.
        feedbackBoolean: new Array(this.feedback.length).fill(false),
      }
      this.students.push(newStudent);

      // initialize each students' feedback strings
      // vtn2 -- just initialized to a list of empty objects... then computed below in
      // getFeedbackStrings().  Probably don't need this at all.
      const newFeedbackString: FeedbackStrings = {
        strings: []
      }
      this.feedbackStrings.push(newFeedbackString);
    }

    // set assignment max score
    this.maxScore = this.students[0].maxGrade;
  }

  clearStudents() {
    this.students = [];
  }

  sortStudentsOnEmail(ascending: boolean) {


  }


  getStudents(): StudentInfo[] {
    return this.students;
  }

  feedbackCreate(feedbackString: string, points: number): void {
    const newFeedback: HomeworkFeedback = {
      feedback: feedbackString,
      deduction: points
    }
    this.feedback.push(newFeedback);

    // add this feedback to the student feedback array as false
    for (let i = 0; i < this.students.length; i++) {
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
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].feedbackBoolean[index]) {
        this.gradeUpdate(i);
      }
    }
  }

  feedbackDelete(index: number): void {
    // let response = window.confirm("Deleting this option will remove it universally. Are you sure?");
    // if (response) {
    // delete feedback in students' boolean feedback arrays
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].feedbackBoolean[index]) {
        // add deduction value to student grade before delete
        const newGrade = parseFloat(this.students[i].grade) + this.feedback[index].deduction
        this.students[i].grade = newGrade.toString();
      }
      this.students[i].feedbackBoolean.splice(index,1);
    }

    // remove 1 element at index
    this.feedback.splice(index,1);
    // }
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
    let totalDeductions = 0;
    for (let n = 0; n < this.feedback.length; n++) {
      if (this.students[studentIndex].feedbackBoolean[n]) {
        totalDeductions = totalDeductions + this.feedback[n].deduction;
      }
    }

    let newGrade = parseFloat(this.maxScore) - totalDeductions;
    // if score is not an int round to 1 decimal place
    const result = (newGrade - Math.floor(newGrade)) !== 0;
    if (result) {
      newGrade = parseFloat(newGrade.toFixed(1));
    }

    this.students[studentIndex].grade = newGrade.toString();
  }

  perfectGrade(studentIndex: number): void {
    this.students[studentIndex].grade = this.maxScore;
    // set all boolean feedback to false
    for (let n = 0; n < this.feedback.length; n++) {
      this.students[studentIndex].feedbackBoolean[n] = false;
    }
  }

  clearGrade(studentIndex:number): void {
    this.students[studentIndex].grade = "";
    // set all boolean feedback to false
    for (let n = 0; n < this.feedback.length; n++) {
      this.students[studentIndex].feedbackBoolean[n] = false;
    }
  }

  getFeedbackStrings(): FeedbackStrings[] {
    // todo: csvRecrods.length should be students.length, imo.
    for (let i = 0; i < this.students.length; i++) {
      // this.feedbackStrings[i].strings.splice(0, this.feedbackStrings[i].strings.length);
      this.feedbackStrings[i].strings = [];
      for (let n = 0; n < this.feedback.length; n++) {
        if (this.students[i].feedbackBoolean[n]) {
          this.feedbackStrings[i].strings.push("-" + this.feedback[n].deduction + ": " + this.feedback[n].feedback);
        }
      }
    }
    return this.feedbackStrings;
  }

  updateChartData(): Array<number> {
    let chartData: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    // loop through each student to put data into histogram
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].grade != "") {
        const numGrade: number = Math.round((parseFloat(this.students[i].grade) / parseFloat(this.maxScore)) * 100);
        // console.log(parseFloat(this.maxScore));
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

  updateFeedbackCount(): Array<HomeworkFeedback> {
    // count the number of times each feedback is applied
    // the deduction value is the count vlaue

    this.feedbackCount = []

    for (let n = 0; n < this.feedback.length; n++) {
      if (this.feedback[n].feedback != "") {
        const newFeedback: HomeworkFeedback = {
          feedback: this.feedback[n].feedback,
          deduction: 0
        }
        this.feedbackCount.push(newFeedback);
      }
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].feedbackBoolean[n]) {
          this.feedbackCount[n].deduction += 1;
        }
      }
    }
    return this.feedbackCount;
  }

  updateAverageStat(): number {
    let avg: number = 0;
    let count: number = 0;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].grade != "") {
        const numGrade: number = Math.round((parseFloat(this.students[i].grade) / parseFloat(this.maxScore)) * 100);
        avg += numGrade;
        count += 1;
      }
    }
    return (avg / count)
  }

  updateMinMaxStats(): Array<number> {
    let min: number = 0;
    let max: number = 0;
    let arrayGrades: Array<number> =[];

    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].grade != "") {
        const numGrade: number = Math.round((parseFloat(this.students[i].grade) / parseFloat(this.maxScore)) * 100);
        arrayGrades.push(numGrade);
      }
    }
    min = Math.min.apply(Math, arrayGrades)
    max = Math.max.apply(Math, arrayGrades)
    return [min, max]
  }
}
