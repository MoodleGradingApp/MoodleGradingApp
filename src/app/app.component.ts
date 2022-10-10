import { Component, ElementRef, HostListener, QueryList, ViewChildren } from '@angular/core';
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

export interface FeedbackRow {
  feedback: string;
  deduction: number;
  selected: boolean;
}

interface StudentInfoPlusFeedback extends StudentInfo {
  feedbackStr: string;
}

// These two enums are for sorting student info.
export enum SortColumn {
  ID,
  NAME,
  EMAIL,
  TIMESTAMP,
  GRADE,
  FEEDBACK,
};

export enum SortDir {
  ASC,
  DESC,
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  // @ts-ignore
  public feedbackArray: FormArray;
  public maxScore = '';
  public feedbackInputText = '';
  public showChart: boolean = false;
  public averageScore: number = 0;
  public minScore: number = 0;
  public maxScoreStat: number = 0;

  public feedbackText: string = '';

  assignmentName: string = '';

  @ViewChild("chart") chart: ChartComponent | undefined;
  public chartOptions: Partial<ChartOptions>;
  @ViewChildren('feedback', { read: ElementRef }) feedbackElems: QueryList<ElementRef> | undefined;

  validFile: boolean = true;
  currentStudentName = '';
  selectedRowEmailAddr = '';
  selectedStudRowIdx: number = -1;
  isRowSelected: boolean = false;
  selectedUser: Array<string>[] = [];

  students: StudentInfoPlusFeedback[] = [];
  feedbackCount: HomeworkFeedback[] = [];
  feedbackStrings: string[] = [];
  header: boolean = false;

  feedbackRows: Array<FeedbackRow> = [];

  // disable check boxes when no csv is imported
  isCheckDisabled = true;

  studentsSortedOn = SortColumn.ID;
  studentsSortedAscOrDsc = SortDir.ASC;

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
    this.addEmptyFeedbackRow();

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
        categories: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90-100"]
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
          this.students = this.feedbackService.getStudents().map(s => {
            return { ...s, feedbackStr: '' };
          });
          this.studentsSortedAscOrDsc = SortDir.ASC;
          this.studentsSortedOn = SortColumn.ID;
          this.validFile = this.feedbackService.wellFormattedFile;
          if (this.validFile) {
            // select and highlight first student
            // this.selectedStudRowIdx = 0;
            this.maxScore = this.feedbackService.maxScore;
            this.feedbackStrings = [];
            // enable checkboxes
            this.isCheckDisabled = false;
            // uncheck check boxes
            this.updateCheckboxState();
            // reset chart data
            this.updateSeries();
          } else {
            this.maxScore = '';
            console.log('Error Bad CSV');
          }
        } else {
          // handle empty CSV
          this.maxScore = '';
          this.students = [];
          console.log('Error', result);
        }
      }
    )
  }

  async importJsonFileListener($event: any) {
    await this.feedbackService.importDataAsJson($event.srcElement.files);
    this.feedbackStrings = this.feedbackService.getFeedbackStrings();
    this.students = this.feedbackService.getStudents().map(s => {
      return {
        ...s,
        feedbackStr: this.feedbackService.getFeedbackString(s.num),
      };
    });
    this.studentsSortedAscOrDsc = SortDir.ASC;
    this.studentsSortedOn = SortColumn.ID;
    this.validFile = true;
    this.selectedStudRowIdx = -1;
    this.maxScore = this.feedbackService.maxScore;
    this.isCheckDisabled = false;

    // build feedbackRows
    const feedbackData: HomeworkFeedback[] = this.feedbackService.getFeedbacks();
    this.feedbackRows = [];
    feedbackData.forEach((row, index) => {
      this.feedbackRows.push({
        feedback: row.feedback,
        deduction: row.deduction,
        selected: false
      });
    });
    this.assignmentName = this.feedbackService.getAssignmentName();

    // reset chart data
    this.updateSeries();

  }

  ngOnInit(): void {
    // no-op
  }


  ngAfterViewInit() {
    // all this is to fix the heights of the feedback text so that multiple lines are
    // used when the user does "Load Progress"
    if (this.feedbackElems) {
      this.feedbackElems.changes.subscribe(children => {
        this.numFeedbackRowsChanged(children);
      });
    };
  }

  // Make feedback textarea big enough to show multiline feedbacks.
  // Have to use this kludgy setTimeout thing so that the textareas have time to
  // compute the scrollHeight and clientHeight values. I don't like it, but it works.
  numFeedbackRowsChanged(feedbackRows: ElementRef[]) {
    const adjustHeight = (elem: ElementRef) => {
      if (elem.nativeElement.scrollHeight > elem.nativeElement.clientHeight) {
        elem.nativeElement.style.height = "";
        elem.nativeElement.style.height = elem.nativeElement.scrollHeight + 3 + "px";
      }
    };
    feedbackRows.forEach((elem) => {
      setTimeout(() => adjustHeight(elem), 0);
    });
  }

  highlightRow(row: number) {
    // remove old highlight
    this.unhighlightRow();

    // add 'selected' class to tr element
    const trs = document.querySelectorAll("tr.csv-data");
    trs[row].classList.add("selected");
    // I don't know what this is about...
    // for (let i = 0; i < row; i++) {
    //   trs[i].id = `${i}`;
    // }
  }

  unhighlightRow() {
    const elem = document.querySelector("tr.csv-data.selected");
    if (elem) {
      elem.classList.remove("selected");
    }
  }

  rowSelected(index: number) {
    this.selectedStudRowIdx = index;
    this.currentStudentName = this.students[index].fullName;
    // Save this next thing so that when we sort, we can find the selected row again.
    // The email should be unique.
    this.selectedRowEmailAddr = this.students[index].email;
    this.maxScore = this.students[0].maxGrade;
    // code to check boxes off when on a certain student
    this.updateCheckboxState();
  }

  updateCheckboxState() {
    if (this.selectedStudRowIdx === -1) {
      return;
    }
    // console.log("Update Check Boxes");
    // console.log('student feedbackBoolean array = ', this.students[this.currentStudentIndex].feedbackBoolean);
    for (let i = 0; i < this.students[this.selectedStudRowIdx].feedbackBoolean.length; i++) {
      let checkbox = document.getElementById("checkbox" + i.toString()) as HTMLInputElement;
      if (this.students[this.selectedStudRowIdx].feedbackBoolean[i]) {
        checkbox.checked = true;
      } else {
        checkbox.checked = false;
      }
    }
  }

  private changeCurrentStudentSelection(increment: number): void {
    if (this.selectedStudRowIdx === 0 && increment === -1 || this.selectedStudRowIdx === this.students.length - 1 && increment === 1) {
      return
    }
    this.selectedStudRowIdx += increment;
    this.rowSelected(this.selectedStudRowIdx);
    this.highlightRow(this.selectedStudRowIdx);
    this.validFile = this.feedbackService.wellFormattedFile;
  }

  nextStudent(): void {
    this.changeCurrentStudentSelection(1);
  }

  previousStudent(): void {
    if (this.selectedStudRowIdx > 0) {
      this.changeCurrentStudentSelection(-1);
    }
  }

  addEmptyFeedbackRow(): void {
    const newRow: FeedbackRow = { feedback: "", deduction: 0, selected: false };
    this.feedbackRows.push(newRow);
    this.feedbackService.feedbackCreate("", 0);
    // console.log(this.feedbackRows);
  }

  deleteFeedbackRow(index: number) {
    // add row so there will never be 0 rows
    if (this.feedbackRows.length === 1) {
      this.addEmptyFeedbackRow();
    }
    this.feedbackRows.splice(index, 1);
    this.feedbackService.feedbackDelete(index);

    // update students' feedback string display
    this.updateCheckboxState();
    this.updateFeedbackStrings();
    this.updateSeries();
  }

  isApplyCheckBoxDisabled(index: number): boolean {
    if (this.isCheckDisabled) {  // all checkboxes are disabled.
      return true;
    }
    // if no feedback string, you can't apply it to a student.
    return this.feedbackRows[index].feedback === "";
  }

  onFeedbackChange(newValue: string, index: number) {
    this.feedbackRows[index].feedback = newValue;

    this.feedbackService.feedbackStringUpdate(index, newValue);

    // update students' feedback string display
    this.updateFeedbackStrings();
    this.updateSeries();
  }

  updateFeedbackStrings() {   // and update grades
    for (let i = 0; i < this.students.length; i++) {
      this.students[i].feedbackStr = this.feedbackService.getFeedbackString(this.students[i].num);
      this.students[i].grade = this.feedbackService.getGrade(this.students[i].num);
    }
  }

  onDeductionChange(newValue: number, index: number) {
    this.feedbackService.feedbackDeductionUpdate(index, newValue);
    this.updateFeedbackStrings();
    this.updateSeries();
  }

  // When the user selects a feedback row, add a new class to the
  // student rows that have that feedback applied to them.
  onFeedbackRowFocus(feedbackRowIndex: number) {
    // clear all other student row highlights.
    const oldTrs = document.querySelectorAll("tr.csv-data.matchSelectedFeedbackRow");
    oldTrs.forEach(tr => tr.classList.toggle("matchSelectedFeedbackRow"));

    const trs = document.querySelectorAll("tr.csv-data");
    this.students.forEach((stud: StudentInfoPlusFeedback, studentIndex: number) => {
      if (this.feedbackService.isFeedbackApplied(studentIndex, feedbackRowIndex)) {
        trs[studentIndex].classList.toggle("matchSelectedFeedbackRow");
      }
    });
  }

  onSelectedChange(wasChecked: boolean, feedbackIndex: number) {
    // console.log("onSelChange: feedbackIdx = ", feedbackIndex, " currentStudIdx = ", this.selectedStudRowIdx);

    // if (this.currentStudentIndex === 0) {
    //   this.highlightRow(this.currentStudentIndex);
    // }

    if (this.selectedStudRowIdx === -1) {
      return;
    }
    const currStud = this.students[this.selectedStudRowIdx];
    if (wasChecked) {
      this.feedbackService.feedbackApply(feedbackIndex, currStud.num);
    } else {
      this.feedbackService.feedbackUnapply(feedbackIndex, currStud.num);
    }
    currStud.feedbackStr = this.feedbackService.getFeedbackString(currStud.num);
    currStud.grade = this.feedbackService.getGrade(currStud.num);

    this.updateSeries();
  }

  saveProgress() {
    this.feedbackService.exportDataAsJson(this.assignmentName);
  }

  perfectScore() {
    if (this.selectedStudRowIdx >= 0) {
      this.feedbackService.perfectGrade(this.students[this.selectedStudRowIdx].num);
    }
    this.updateCheckboxState();
    this.updateFeedbackStrings();
    this.updateSeries();
  }

  clearScore() {
    if (this.selectedStudRowIdx >= 0) {
      this.feedbackService.clearGrade(this.students[this.selectedStudRowIdx].num);
    }
    this.updateCheckboxState();
    this.updateFeedbackStrings();
    this.updateSeries();
  }

  private setSortingState(column: SortColumn) {
    if (this.studentsSortedOn !== column) {
      this.studentsSortedOn = column;
      this.studentsSortedAscOrDsc = SortDir.ASC;
    } else {
      // already sorted on this column, so switch direction
      this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
    }
  }

  sortOnName() {
    this.setSortingState(SortColumn.NAME);
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        s1.fullName.localeCompare(s2.fullName) : s2.fullName.localeCompare(s1.fullName);
    });
    this.findCurrentRow();
  }

  sortOnEmail() {
    this.setSortingState(SortColumn.EMAIL);
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        s1.email.localeCompare(s2.email) : s2.email.localeCompare(s1.email);
    });
    this.findCurrentRow();
  }

  sortOnTimestamp() {
    this.setSortingState(SortColumn.TIMESTAMP);
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        s1.gradeLastModified.localeCompare(s2.gradeLastModified) :
        s2.gradeLastModified.localeCompare(s1.gradeLastModified);
    });
    this.findCurrentRow();
  }

  sortOnGrade() {
    this.setSortingState(SortColumn.GRADE);
    this.students = this.students.sort((s1, s2) => {
      // handle empty grades: treat them as 0s.
      const s1grade = parseFloat(s1.grade) || 0;
      const s2grade = parseFloat(s2.grade) || 0;
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        s1grade - s2grade : s2grade - s1grade
    });
    this.findCurrentRow();
  }

  sortOnFeedback() {
    this.setSortingState(SortColumn.FEEDBACK);
    this.students = this.students.sort((s1, s2) => {
      return this.studentsSortedAscOrDsc === SortDir.ASC ?
        this.feedbackStrings[s1.num].localeCompare(this.feedbackStrings[s2.num]) :
        this.feedbackStrings[s2.num].localeCompare(this.feedbackStrings[s1.num]);
    });
    this.findCurrentRow();
  }

  // After sorting, the "current" row is moved. The GUI will still display it as highlighted.
  // We need to rediscover what row it is and set selectedStudRowIdx to that row.
  // We recorded the email address of the current row, because the email should be a unique
  // value. So, we'll search for that again in the students array.
  findCurrentRow() {
    // Wait for the DOM to update after the sort, then find the row that was selected.
    setTimeout(() => {
      for (let i = 0; i < this.students.length; i++) {
        if (this.students[i].email === this.selectedRowEmailAddr) {
          // console.log(`found email ${this.selectedRowEmailAddr} at index ${i}`);
          this.rowSelected(i);
          this.highlightRow(i);
          return;
        }
      }
    }, 500);
  }

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

  // given the student table column name, figure out if the table is sorted on that
  // column and whether ascending or descending. Return the string of class names
  // to be displayed appropriately: if not sorted on this column, return ''. Else,
  // return the fontawesome up-caret or down-caret classes.
  displaySortArrow(columnName: string) {
    const nameToColumnMap = {
      "email": SortColumn.EMAIL,
      "name": SortColumn.NAME,
      "timestamp": SortColumn.TIMESTAMP,
      "grade": SortColumn.GRADE,
      "feedback": SortColumn.FEEDBACK
    };
    // @ts-ignore
    if (this.studentsSortedOn === nameToColumnMap[columnName]) {
      return this.studentsSortedAscOrDsc === SortDir.ASC ? "fa fa-caret-down" : "fa fa-caret-up";
    } else {
      return '';
    }
  }


}
