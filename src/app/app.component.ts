import { Component, HostListener } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FeedbackService, HomeworkFeedback, StudentInfo } from './feedback.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexPlotOptions,
  ApexAnnotations,
  ApexFill,
  ApexStroke,
  ApexGrid,
  ApexStates,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  annotations: ApexAnnotations;
  fill: ApexFill;
  stroke: ApexStroke;
  grid: ApexGrid;
  states: ApexStates;
  tooltip: ApexTooltip;
};

export class FeedbackRow {
    feedback: string;
    deduction: number;
    selected: boolean;
}

// These two enums are for sorting student info.
enum SortColumn {
  ID,
  NAME,
  EMAIL,
  TIMESTAMP,
  GRADE,
  FEEDBACK,
};

enum SortDir {
  ASC,
  DESC,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public feedbackArray: FormArray;
  public maxScore: string;
  public feedbackInputText: string;
  public showChart: boolean = false;
  public averageScore: number = 0;
  public minScore: number = 0;
  public maxScoreStat: number = 0;

  public feedbackText: string = '';

  assignmentName: string = '';

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  validFile: boolean = true;
  currentStudentName: string;
  currentStudentIndex: number = -1;
  isRowSelected: boolean =  false;
  previousRow: number = 2;
  selectedUser: Array<string>[] = [];

  students: StudentInfo[];
  feedbackCount: HomeworkFeedback[] = [];
  feedbackStrings: string[] = [];
  header: boolean = false;

  feedbackRows: Array<FeedbackRow> = [];

  // disable check boxes when no csv is imported
  isCheckDisabled: boolean = true;

  private studentsSortedOn = SortColumn.ID;
  private studentsSortedAscOrDsc = SortDir.ASC;

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
    const newRow: FeedbackRow = {feedback: "", deduction: 0, selected: false};
    this.feedbackRows.push(newRow);
    this.feedbackService.feedbackCreate(null, null);

    this.chartOptions = {
      series: [
        {
          name: "Grades",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ],
      chart: {
        foreColor: '#FFFFFF',
        height: 400,
        type: "bar",
        toolbar: {
          show: false
        }
      },
      title: {
        text: "Grade Distribution",
        align: "center"
      },
      yaxis: {
        title: {
          text: "No. of Students"
        }
      },
      xaxis: {
        title: {
          text: "Grades Percentage",
          offsetY: -10,
          offsetX: -20,
        },
        categories: ["0-9", "10-19",  "20-29",  "30-39",  "40-49",  "50-59",  "60-69",  "70-79", "80-89", "90-100"]
      },
      states: {
        hover: {
          filter: {
            type: "none"
          }
        }
      },
    };
  }

  async importCsvFileListener($event: any) {
    // clear current table
    // display warning if student table is not empty
    // console.log(this.csvRecords);
    // console.log(this.csvRecords != undefined);
    if (this.students !== undefined) {
      if (confirm("Are you sure you want to upload another CSV file? Your current work will be deleted!")) {
        // do nothing
        console.log("User pressed Yes!");
      } else {
        console.log("User pressed No!");
        return;
      }
    }

    this.feedbackService.clearStudents();
    // Select the file from the event
    const file = $event.srcElement.files;
    // wait for this to return
    this.feedbackService.parseFile(file).subscribe(
      result => {
        if (result instanceof Array) {
          this.feedbackService.parseCSV(result);
          this.students = this.feedbackService.getStudents();
          this.studentsSortedAscOrDsc = SortDir.ASC;
          this.studentsSortedOn = SortColumn.ID;
          this.validFile = this.feedbackService.correctFile;
          if (this.validFile) {
            // select and highlight first student
            this.currentStudentIndex = 0;
            this.maxScore = this.feedbackService.maxScore;
            // get feedback strings to display
            this.feedbackStrings = this.feedbackService.getFeedbackStrings();
            // enable checkboxes
            this.isCheckDisabled = null;
            // uncheck check boxes
            this.updateCheckboxState();
            // reset chart data
            this.updateSeries();
          } else {
            this.maxScore = null;
            console.log('Error Bad CSV');
          }
        } else {
          // handle empty CSV
          this.maxScore = null;
          this.students = [];
          console.log('Error', result);
        }
      }
    )
  }

  async importJsonFileListener($event: any) {
    await this.feedbackService.importDataAsJson($event.srcElement.files);
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
    this.students = this.feedbackService.getStudents();
    this.studentsSortedAscOrDsc = SortDir.ASC;
    this.studentsSortedOn = SortColumn.ID;
    this.validFile = true;
    this.currentStudentIndex = -1;
    this.maxScore = this.feedbackService.maxScore;
    this.isCheckDisabled = null;

    // build feedbackRows
    const feedbackData: HomeworkFeedback[] = this.feedbackService.getFeedbacks();
    this.feedbackRows = [];
    feedbackData.forEach(row => {
      this.feedbackRows.push({ feedback: row.feedback,
                               deduction: row.deduction,
                               selected: false });
    });
    this.assignmentName = this.feedbackService.getAssignmentName();
  }

  ngOnInit(): void {
    // no-op
  }

  highlightRow(row: number) {
    // add 'selected' class to tr element
    const trs = document.querySelectorAll("tr.csv-data");
    if (! this.isRowSelected) {
      this.isRowSelected = true;
    } else {
      trs[this.previousRow].classList.remove("selected");
    }
    trs[row].classList.add("selected");
    this.previousRow = row;
  }

  rowSelected(index: number) {
    this.currentStudentIndex = index;
    this.currentStudentName = this.students[index].fullName;
    this.maxScore = this.students[0].maxGrade;
    // code to check boxes off when on a certain student
    this.updateCheckboxState();
    // console.log(this.csvRecords);
  }

  updateCheckboxState() {
    if (this.currentStudentIndex === -1) {
      return;
    }
    // console.log("Update Check Boxes");
    // console.log('student feedbackBoolean array = ', this.students[this.currentStudentIndex].feedbackBoolean);
    for (let i = 0; i < this.students[this.currentStudentIndex].feedbackBoolean.length; i++) {
      let checkbox = document.getElementById("checkbox" + i.toString()) as HTMLInputElement;
      if (this.students[this.currentStudentIndex].feedbackBoolean[i]) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    }
  }

  studentParser(increment: number): void {
    if (this.currentStudentIndex === 0 && increment === -1 || this.currentStudentIndex === this.students.length-1 && increment === 1) {
      return
    }
    this.currentStudentIndex += increment;
    this.rowSelected(this.currentStudentIndex);
    this.highlightRow(this.currentStudentIndex);
    this.validFile = this.feedbackService.correctFile;
  }

  nextStudent(): void {
    this.studentParser(1);
  }

  previousStudent(): void {
    if (this.currentStudentIndex > 0) {
      this.studentParser(-1);
    }
  }

  addRow(): void {
    const newRow: FeedbackRow = {feedback: "", deduction: 0, selected: false};
    this.feedbackRows.push(newRow);
    this.feedbackService.feedbackCreate(null, null);
    // console.log(this.feedbackRows);
  }

  deleteRow(index: number) {
    // add row so there will never be 0 rows
    if (this.feedbackRows.length === 1) {
      this.addRow();
    }
    this.feedbackRows.splice(index, 1);
    this.feedbackService.feedbackDelete(index);

    // update students' feedback string display
    this.updateCheckboxState();
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
    this.updateSeries();
  }

  onFeedbackChange(newValue: string, index: number) {
    this.feedbackService.feedbackStringUpdate(index, newValue);
    // update students' feedback string display
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
    this.updateSeries();
  }

  onDeductionChange(newValue: number, index: number) {
    this.feedbackService.feedbackDeductionUpdate(index, newValue);
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
    this.updateSeries();
  }

  onSelectedChange(newValue: boolean, feedbackIndex: number) {
    if (this.currentStudentIndex === 0) {
      this.highlightRow(this.currentStudentIndex);
    }

    if (this.currentStudentIndex >= 0) {
      if (newValue === true) {
        this.feedbackService.feedbackApply(feedbackIndex, this.currentStudentIndex);
      } else {
        this.feedbackService.feedbackUnapply(feedbackIndex, this.currentStudentIndex);
      }
      // update students' feedback string display
      this.feedbackStrings = this.feedbackService.getFeedbackStrings();
      this.updateSeries();
    }
  }

  saveProgress() {
    this.feedbackService.exportDataAsJson(this.assignmentName);
  }

  perfectScore() {
    if (this.currentStudentIndex >= 0) {
      this.feedbackService.perfectGrade(this.currentStudentIndex);
    }
    this.updateCheckboxState();
    // update students' feedback string display
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
    this.updateSeries();
  }

  clearScore() {
    if (this.currentStudentIndex >= 0) {
      this.feedbackService.clearGrade(this.currentStudentIndex);
    }
    this.updateCheckboxState();
    // update students' feedback string display
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
    console.log(this.feedbackCount);
    this.updateSeries();
  }

  sortOnName() {
    if (this.studentsSortedOn !== SortColumn.NAME) {
      this.studentsSortedOn = SortColumn.NAME;
      this.studentsSortedAscOrDsc = SortDir.ASC;
    } else {
      // already sorted on this column, so switch direction
      this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
    }
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        s1.fullName.localeCompare(s2.fullName) : s2.fullName.localeCompare(s1.fullName);
    });
  }

  sortOnEmail() {
    if (this.studentsSortedOn !== SortColumn.EMAIL) {
      this.studentsSortedOn = SortColumn.EMAIL;
      this.studentsSortedAscOrDsc = SortDir.ASC;
    } else {
      // already sorted on this column, so switch direction
      this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
    }
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        s1.email.localeCompare(s2.email) : s2.email.localeCompare(s1.email);
    });
  }

  sortOnTimestamp() {
    if (this.studentsSortedOn !== SortColumn.TIMESTAMP) {
      this.studentsSortedOn = SortColumn.TIMESTAMP;
      this.studentsSortedAscOrDsc = SortDir.ASC;
    }else {
      // already sorted on this column, so switch direction
      this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
    }
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        s1.gradeLastModified.localeCompare(s2.gradeLastModified) : s2.gradeLastModified.localeCompare(s1.gradeLastModified);
    });
  }

  sortOnGrade() {
    if (this.studentsSortedOn !== SortColumn.GRADE) {
      this.studentsSortedOn = SortColumn.GRADE;
      this.studentsSortedAscOrDsc = SortDir.ASC;
    } else {
      // already sorted on this column, so switch direction
      this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
    }
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        s1.grade.localeCompare(s2.grade) : s2.grade.localeCompare(s1.grade);
    });
  }

  sortOnFeedback() {
    if (this.studentsSortedOn !== SortColumn.FEEDBACK) {
      this.studentsSortedOn = SortColumn.FEEDBACK;
      this.studentsSortedAscOrDsc = SortDir.ASC;
    } else {
      // already sorted on this column, so switch direction
      this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
    }
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        this.feedbackStrings[s1.num].localeCompare(this.feedbackStrings[s2.num]) :
        this.feedbackStrings[s2.num].localeCompare(this.feedbackStrings[s1.num]);
    });
  }

  // To Do: Delete Later! Useful for Debugging!
  // tempFunction() {
  //   this.feedback = this.feedbackService.feedbackRead();
  //   console.log(this.feedback);
  //   console.log(this.feedbackCount);
  //   console.log(this.csvRecords);
  // }

  updateSeries() {
    let chartData: Array<number> = this.feedbackService.updateChartData();
    // update data in chart
    this.chartOptions.series = [{
      data: chartData
    }];
    this.feedbackCount = this.feedbackService.updateFeedbackCount();
    this.averageScore = this.feedbackService.updateAverageStat();
    [this.minScore, this.maxScoreStat] = this.feedbackService.updateMinMaxStats();
    // console.log("update chart data!")
  }

  exportCSV(): void {
    this.feedbackService.exportCSV(this.assignmentName);
  }

  // Warn user if reloading, closing, navigating away from page.
  @HostListener('window:beforeunload', ['$event'])
  unloadHandler(event: Event) {
    window.opener.location.reload();
  }
}
