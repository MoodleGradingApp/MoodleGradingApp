import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NgxCSVParserError, NgxCsvParser } from 'ngx-csv-parser';
import * as dayjs from 'dayjs';

export interface StudentInfo {
  num: number,            // index of this record.
  email: string,          // displayed on screen
  fullName: string,       // displayed on screen
  grade: string,          // displayed on screen
  gradeChange: string,
  identifier: string,
  gradeLastModified: string,    // displayed on screen as Timestamp
  submissionLastModified: string,
  maxGrade: string,       // displayed on screen
  onlineText: string,
  status: string,
  feedbackBoolean: Array<boolean>,
}

export interface HomeworkFeedback {
  feedback: string,
  deduction: number
}

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private ngxCsvParser: NgxCsvParser) { }

  private students: StudentInfo[] = [];
  private feedbacks: HomeworkFeedback[] = [];
  private feedbackCounts: HomeworkFeedback[] = [];

  private assignmentNameFromJSONFile = '';

  public correctFile = false;
  public maxScore = '';

  parseFile(fileName: any): Observable<any[] | NgxCSVParserError | string> {
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

    const reqdFields = [
      "Identifier",
      "Email address",
      "Feedback comments",
      "Full name",
      "Grade",
      "Grade can be changed",
      "Last modified (grade)",
      "Last modified (submission)",
      "Maximum Grade",
      "Online text",
      "Status",
    ];

    // check headers to make sure it is a well-formed CSV file
    let errorMsg = '';
    if (csvRecords[0] === undefined) {
      errorMsg = "No records in CSV file";
    } else {
      for (const field of reqdFields) {
        console.log('Checking field', field);
        if (csvRecords[0][field] === undefined) {
          errorMsg = `CSV is missing required field: ${field}`;
          break;
        }
      }
    }

    if (errorMsg !== '') {
      console.log(errorMsg);
      this.correctFile = false;
      this.clearStudents();
    } else {
      this.correctFile = true;
      this.createStudentsFromCsv(csvRecords);
    }
  }

  // Make a download button
  public exportCSV(assignmentName: string) {

    // Remove forbidden characters from assignment title
    const title = this.cleanUpAssignmentTitle(assignmentName);

    // Get current date and time
    const currentDateTime = dayjs().format('_YYYY-MM-DD');

    // Pass string into handle for data-table
    const my_data_string = this.buildCSV();

    // Create an href element in the DOM
    let a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);

    // Create object of type csv text file
    const blob = new Blob([my_data_string], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);

    a.href = url;
    a.download = title + currentDateTime + '.csv';
    a.click();
  }

  // This manually constructs our CSV file string
  private buildCSV(): string {
    // console.log(JSON.stringify(students, null, 2));
    let csv_file = '';

    // create header row
    const row = 'Identifier,Full name,Email address,Status,Grade,Maximum Grade,Grade can be changed,Last modified (submission),Online text,Last modified (grade),Feedback comments'

    // Add row and newline + carriage-return
    csv_file += row + '\r\n';

    // Build and add lines to csv_file
    for (let i = 0; i < this.students.length; i++) {
      let line = '';
      for (let field in this.students[i]) {
        if (line !== '') {
          line += ','   // do comma-separation
        }
        if (field === 'num') {
          continue;
        }
        if (field === 'gradeLastModified' || field === 'submissionLastModified') {
          line += '"' + this.students[i][field] + '"'
        } else if (field == 'feedbackBoolean') {
          let feedbackString = this.createCSVFeedbackString(this.students[i][field])
          // wrap each field in double quotes
          line += '"' + feedbackString + '"'
        }
        else {
          // @ts-ignore
          line += this.students[i][field];
        }

      }
      csv_file += line + '\r\n';
    }

    // End of file
    return csv_file;
  }

  private createCSVFeedbackString(feedback: Array<boolean>): string {
    let feedbackStringArray = [];
    for (let n = 0; n < this.feedbacks.length; n++) {
      if (feedback[n]) {
        // if the feedback string has a double quote in it, add an extra one.
        const res = this.feedbacks[n].feedback.replace(/"/g, '""');
        feedbackStringArray.push("-" + this.feedbacks[n].deduction + ": " + res)
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
        num: i,
        identifier: csvRecords[i]["Identifier" as keyof {}],
        fullName: csvRecords[i]["Full name" as keyof {}],
        // @ts-ignore
        email: csvRecords[i]["Email address"].split("@", 1)[0],  // only the username part
        status: csvRecords[i]["Status" as keyof {}],
        grade: csvRecords[i]["Grade" as keyof {}],
        maxGrade: csvRecords[i]["Maximum Grade" as keyof {}],
        gradeChange: csvRecords[i]["Grade can be changed" as keyof {}],
        submissionLastModified: csvRecords[i]["Last modified (submission)" as keyof {}],
        onlineText: csvRecords[i]["Online text" as keyof {}],
        gradeLastModified: csvRecords[i]["Last modified (grade)" as keyof {}],
        // Could be that the user added multiple feedbacks before loading the csv file
        // (seems unlikely but could be done). So, we need to initialize feedbackBoolean array
        // to have false for each feedback in existence already.
        feedbackBoolean: new Array(this.feedbacks.length).fill(false),
      }
      this.students.push(newStudent);
    }
    this.maxScore = this.students[0].maxGrade;
  }

  clearStudents() {
    this.students = [];
  }

  clearFeedbacks() {
    this.feedbacks = [];
    this.feedbackCounts = [];
  }

  private cleanUpAssignmentTitle(assignmentName: string): string {
    // Remove forbidden characters from assignment title and replace spaces with underscores
    assignmentName = assignmentName.replace(/[#<>^\-~$%!&*,.;\\"?'\/{}:@+`|=\[\]]/g, '')
    assignmentName = assignmentName.replace(/ /g, '_');
    if (assignmentName === '') {
      assignmentName = "assignment";
    }
    return assignmentName;
  }

  exportDataAsJson(assignmentName: string) {
    const wholeThing = {
      "students": this.students,
      "feedbacks": this.feedbacks,
      "assignmentName": assignmentName,
    };
    const jsonWholeThing = JSON.stringify(wholeThing);

    const title = this.cleanUpAssignmentTitle(assignmentName) + ".json";

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(wholeThing));

    // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
    let a = document.createElement("a");
    a.setAttribute('style', 'display:none;');
    document.body.appendChild(a);
    a.setAttribute("href", dataStr);
    a.setAttribute("download", title);
    a.click();
    a.remove();
  }

  importDataAsJson(files: File[]): Promise<void> {
    return new Promise((resolve, reject) => {
      const file = files[0];
      const fr = new FileReader();
      fr.onload = (e) => {
        let lines = e.target!.result;
        const res = JSON.parse(lines as string);
        // console.log('got json file parsed: res = ', JSON.stringify(res, null, 2));
        this.students = res["students"];
        this.feedbacks = res["feedbacks"];
        this.assignmentNameFromJSONFile = res["assignmentName"];
        this.maxScore = this.students[0].maxGrade;
        this.correctFile = true;
        resolve();
      };
      fr.readAsText(file);
    });
  }

  getStudents(): StudentInfo[] {
    return this.students;
  }

  getFeedbacks(): HomeworkFeedback[] {
    return this.feedbacks;
  }

  getAssignmentName(): string {
    return this.assignmentNameFromJSONFile;
  }

  feedbackCreate(feedbackString: string, points: number): void {
    const newFeedback: HomeworkFeedback = {
      feedback: feedbackString,
      deduction: points
    }
    this.feedbacks.push(newFeedback);

    // add this feedback to the student feedback array as false
    for (let i = 0; i < this.students.length; i++) {
      this.students[i].feedbackBoolean.push(false);
    }
  }

  feedbackRead(): HomeworkFeedback[] {
    return this.feedbacks;
  }

  feedbackStringUpdate(index: number, feedbackString: string): void {
    // update values in feedback array
    this.feedbacks[index].feedback = feedbackString;
  }

  feedbackDeductionUpdate(index: number, points: number): void {
    this.feedbacks[index].deduction = points;
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
        const newGrade = parseFloat(this.students[i].grade) + this.feedbacks[index].deduction;
        this.students[i].grade = newGrade.toString();
      }
      this.students[i].feedbackBoolean.splice(index, 1);
    }

    // remove 1 element at index
    this.feedbacks.splice(index, 1);
    // }
  }

  feedbackApply(feedbackIndex: number, studentIndex: number): void {
    this.students[studentIndex].feedbackBoolean[feedbackIndex] = true;
    this.gradeUpdate(studentIndex);
  }

  feedbackUnapply(feedbackIndex: number, studentIndex: number): void {
    this.students[studentIndex].feedbackBoolean[feedbackIndex] = false;
    this.gradeUpdate(studentIndex);
  }

  isFeedbackApplied(studentIndex: number, feedbackIndex: number): boolean {
    return this.students[studentIndex].feedbackBoolean[feedbackIndex];

  }

  gradeUpdate(studentIndex: number): void {
    let totalDeductions = 0;
    for (let n = 0; n < this.feedbacks.length; n++) {
      if (this.students[studentIndex].feedbackBoolean[n]) {
        totalDeductions = totalDeductions + this.feedbacks[n].deduction;
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
    for (let n = 0; n < this.feedbacks.length; n++) {
      this.students[studentIndex].feedbackBoolean[n] = false;
    }
  }

  clearGrade(studentIndex: number): void {
    this.students[studentIndex].grade = "";
    // set all boolean feedback to false
    for (let n = 0; n < this.feedbacks.length; n++) {
      this.students[studentIndex].feedbackBoolean[n] = false;
    }
  }

  // Return an array of arrays of strings -- outer array is per student, inner array is feedback strings
  // for that student.
  getFeedbackStrings(): string[] {
    let res = [];
    for (let i = 0; i < this.students.length; i++) {
      let strs = [];
      for (let n = 0; n < this.feedbacks.length; n++) {
        if (this.students[i].feedbackBoolean[n]) {
          strs.push("-" + this.feedbacks[n].deduction + ": " + this.feedbacks[n].feedback);
        }
      }
      // join all deduction strings together with semi-colon separator.
      res.push(strs.join('; '));
    }
    return res;
  }

  getFeedbackString(studentIdx: number): string {
    let strs = [];
    for (let n = 0; n < this.feedbacks.length; n++) {
      if (this.students[studentIdx].feedbackBoolean[n]) {
        strs.push("-" + this.feedbacks[n].deduction + ": " + this.feedbacks[n].feedback);
      }
    }
    return strs.join(', ');
  }

  getGrade(studentIdx: number): string {
    return this.students[studentIdx].grade;
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

    this.feedbackCounts = [];
    // console.log("feedback lengths = ", this.feedbacks.length)

    for (let n = 0; n < this.feedbacks.length; n++) {
      if (this.feedbacks[n].feedback != "") {
        const newFeedback: HomeworkFeedback = {
          feedback: this.feedbacks[n].feedback,
          deduction: 0
        }
        this.feedbackCounts.push(newFeedback);
      }
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].feedbackBoolean[n]) {
          this.feedbackCounts[n].deduction += 1;
        }
      }
    }
    return this.feedbackCounts;
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
    let arrayGrades: Array<number> = [];

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
