(self["webpackChunkgrading_app"] = self["webpackChunkgrading_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackRow": function() { return /* binding */ FeedbackRow; },
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.service */ 7518);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ 4256);






const _c0 = ["chart"];
function AppComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_tr_54_Template_td_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r7 = restoredCtx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.deleteRow(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "textarea", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_54_Template_textarea_ngModelChange_5_listener($event) { const row_r6 = ctx.$implicit; return row_r6.feedback = $event; })("ngModelChange", function AppComponent_tr_54_Template_textarea_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r7 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onFeedbackChange($event, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "                                        ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_54_Template_input_ngModelChange_8_listener($event) { const row_r6 = ctx.$implicit; return row_r6.deduction = $event; })("ngModelChange", function AppComponent_tr_54_Template_input_ngModelChange_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r7 = restoredCtx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onDeductionChange($event, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_54_Template_input_ngModelChange_10_listener($event) { const row_r6 = ctx.$implicit; return row_r6.selected = $event; })("ngModelChange", function AppComponent_tr_54_Template_input_ngModelChange_10_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const i_r7 = restoredCtx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onSelectedChange($event, i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r6.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r6.deduction);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "checkbox", i_r7, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r6.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx_r0.isCheckDisabled ? true : null);
} }
function AppComponent_div_60_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stats_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stats_r17.deduction, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stats_r17.feedback);
} }
function AppComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "apx-chart", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Feedback Count:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_60_tr_6_Template, 5, 2, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Grade Stats:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx_r1.chartOptions.series)("chart", ctx_r1.chartOptions.chart)("xaxis", ctx_r1.chartOptions.xaxis)("yaxis", ctx_r1.chartOptions.yaxis)("title", ctx_r1.chartOptions.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.feedbackCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Average Score: ", ctx_r1.averageScore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Min Score: ", ctx_r1.minScore, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Max Score: ", ctx_r1.maxScoreStat, "");
} }
function AppComponent_p_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*Invalid CSV File");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_thead_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Timestamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Grade");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_tr_75_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_tr_75_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const i_r18 = restoredCtx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.rowSelected(i_r18); })("click", function AppComponent_tr_75_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const i_r18 = restoredCtx.index; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.highlightRow(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = ctx.index;
    const csvData_r19 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](csvData_r19.fullName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](csvData_r19.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](csvData_r19.gradeLastModified);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](csvData_r19.grade);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.feedbackStrings[i_r18]);
} }
class FeedbackRow {
}
class AppComponent {
    constructor(fb, feedbackService) {
        this.fb = fb;
        this.feedbackService = feedbackService;
        this.showChart = false;
        this.averageScore = 0;
        this.minScore = 0;
        this.maxScoreStat = 0;
        this.feedbackText = '';
        this.assignmentName = '';
        this.validFile = true;
        this.currentStudentIndex = -1;
        this.isRowSelected = false;
        this.previousRow = 2;
        this.selectedUser = [];
        this.studentRow = ['i', 'name', 'email', 'timestamp', 'grade', 'feedback'];
        this.feedbackCount = [];
        this.feedbackStrings = [];
        this.header = false;
        this.feedbackRows = [];
        //disable check boxes when no csv is imported
        this.isCheckDisabled = true;
        const newRow = { feedback: "", deduction: 0, selected: false };
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
    fileChangeListener($event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // clear current table
            // display warning if student table is not empty
            console.log(this.csvRecords);
            console.log(this.csvRecords != undefined);
            if (this.csvRecords != undefined) {
                if (confirm("Are you sure you want to upload another CSV file? Your current work will be deleted!")) {
                    // do nothing
                    console.log("User pressed Yes!");
                }
                else {
                    console.log("User pressed No!");
                    return;
                }
            }
            this.feedbackService.clearStudents();
            // Select the file from the event
            const file = $event.srcElement.files;
            // wait for this to return
            this.feedbackService.parseFile(file).subscribe(result => {
                if (result instanceof Array) {
                    this.feedbackService.parseCSV(result);
                    this.csvRecords = this.feedbackService.getStudents();
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
                    }
                    else {
                        this.maxScore = null;
                        console.log('Error Bad CSV');
                    }
                }
                else {
                    // handle empty CSV
                    this.maxScore = null;
                    this.validFile = false;
                    this.csvRecords = [];
                    console.log('Error', result);
                }
            });
        });
    }
    ngOnInit() {
        // no-op
    }
    highlightRow(row) {
        // add 'selected' class to tr element
        const trs = document.querySelectorAll("tr.csv-data");
        if (!this.isRowSelected) {
            this.isRowSelected = true;
        }
        else {
            trs[this.previousRow].classList.remove("selected");
        }
        trs[row].classList.add("selected");
        this.previousRow = row;
    }
    rowSelected(index) {
        this.currentStudentIndex = index;
        this.currentStudentName = this.csvRecords[index].fullName;
        this.maxScore = this.csvRecords[0].maxGrade;
        // code to check boxes off when on a certain student
        this.updateCheckboxState();
        // console.log(this.csvRecords);
    }
    updateCheckboxState() {
        if (this.currentStudentIndex === -1) {
            return;
        }
        console.log("Update Check Boxes");
        console.log('student feedbackBoolean array = ', this.csvRecords[this.currentStudentIndex].feedbackBoolean);
        for (let i = 0; i < this.csvRecords[this.currentStudentIndex].feedbackBoolean.length; i++) {
            let checkbox = document.getElementById("checkbox" + i.toString());
            if (this.csvRecords[this.currentStudentIndex].feedbackBoolean[i]) {
                checkbox.checked = true;
            }
            else {
                checkbox.checked = false;
            }
        }
    }
    studentParser(incriment) {
        if (this.currentStudentIndex === 0 && incriment === -1 || this.currentStudentIndex === this.csvRecords.length - 1 && incriment === 1) {
            return;
        }
        this.currentStudentIndex += incriment;
        this.rowSelected(this.currentStudentIndex);
        this.highlightRow(this.currentStudentIndex);
        this.validFile = this.feedbackService.correctFile;
    }
    nextStudent() {
        this.studentParser(1);
    }
    previousStudent() {
        if (this.currentStudentIndex > 0) {
            this.studentParser(-1);
        }
    }
    addRow() {
        const newRow = { feedback: "", deduction: 0, selected: false };
        this.feedbackRows.push(newRow);
        this.feedbackService.feedbackCreate(null, null);
        // console.log(this.feedbackRows);
    }
    deleteRow(index) {
        // add row so there will never be 0 rows
        if (this.feedbackRows.length == 1) {
            this.addRow();
        }
        this.feedbackRows.splice(index, 1);
        this.feedbackService.feedbackDelete(index);
        // update students' feedback string display
        this.updateCheckboxState();
        this.feedbackStrings = this.feedbackService.getFeedbackStrings();
        this.updateSeries();
    }
    onFeedbackChange(newValue, index) {
        this.feedbackService.feedbackStringUpdate(index, newValue);
        // update students' feedback string display
        this.feedbackStrings = this.feedbackService.getFeedbackStrings();
        this.updateSeries();
    }
    onDeductionChange(newValue, index) {
        this.feedbackService.feedbackDeductionUpdate(index, newValue);
        this.feedbackStrings = this.feedbackService.getFeedbackStrings();
        this.updateSeries();
    }
    onSelectedChange(newValue, feedbackIndex) {
        if (this.currentStudentIndex == 0) {
            this.highlightRow(this.currentStudentIndex);
        }
        if (this.currentStudentIndex >= 0) {
            if (newValue === true) {
                this.feedbackService.feedbackApply(feedbackIndex, this.currentStudentIndex);
            }
            else {
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
    // To Do: Delete Later! Useful for Debugging!
    // tempFunction() {
    //   this.feedback = this.feedbackService.feedbackRead();
    //   console.log(this.feedback);
    //   console.log(this.feedbackCount);
    //   console.log(this.csvRecords);
    // }
    updateSeries() {
        let chartData = this.feedbackService.updateChartData();
        // update data in chart
        this.chartOptions.series = [{
                data: chartData
            }];
        this.feedbackCount = this.feedbackService.updateFeedbackCount();
        this.averageScore = this.feedbackService.updateAverageStat();
        [this.minScore, this.maxScoreStat] = this.feedbackService.updateMinMaxStats();
        // console.log("update chart data!")
    }
    exportCSV() {
        this.feedbackService.exportCSV(this.assignmentName);
    }
    // Warn user if reloading, closing, navigating away from page.
    unloadHandler(event) {
        window.opener.location.reload();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_0__.FeedbackService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadHandler($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 76, vars: 9, consts: [["id", "master-panel", 1, "panel", "panel-default", "hide-outline"], [1, "title"], [1, "demo-text"], ["href", "assets/demo_full.mp4"], [1, "row"], ["id", "main-left-panel", 1, "col", "fixed-panel"], [1, "panel", "panel-default", "hide-outline", "tight"], [1, "panel", "panel-default"], ["id", "item-info", 1, "panel", "panel-default", "hide-outline", "tight"], ["id", "assignment"], ["for", "assignment"], ["type", "text", "id", "title", "name", "assignment", "placeholder", "Ex. Homework 1", "data-testid", "nameInput", 1, "input-box", 3, "ngModel", "ngModelChange"], ["id", "max-pts"], ["for", "max-pts"], [1, "panel", "panel-default", "hide-outline", "tight", "btn-set"], ["type", "button", "data-testid", "prevStudentBtn", 1, "btn-primary-blue", 3, "click"], ["type", "button", "data-testid", "nextStudentBtn", 1, "btn-primary-blue", 3, "click"], ["type", "button", 1, "btn-primary-blue", 3, "click"], ["for", "Student"], ["type", "button", "id", "save-btn", 1, "btn-primary-green", 3, "click"], [1, "feedback-table-container"], ["id", "feedback-table"], ["id", "trash-header"], [4, "ngFor", "ngForOf"], ["type", "button", "id", "addFeedbackBtn", "data-testid", "addFeedbackBtn", 1, "btn-primary-blue", 3, "click"], ["class", "grade-stats", 4, "ngIf"], ["id", "main-right-panel", 1, "panel", "panel-default"], [1, "csv-import-btn"], [1, "panel", "panel-default", "tight", "hide-outline", "sticky", "outer-nowrap"], ["for", "csvFileUpload", "id", "csvImportBtn", 1, "btn-primary-blue", "inner-nowrap"], ["id", "csvFileUpload", "data-testid", "importCSV", "type", "file", "name", "File Upload", "accept", ".csv", 1, "inner-nowrap", "sticky", 3, "change"], ["fileImportInput", ""], ["class", "file-warning inner-nowrap", 4, "ngIf"], ["type", "button", "id", "exportBtn", 1, "btn-primary-blue", 3, "click"], [1, "panel", "panel-default", "tight", "hide-outline", "csv-result-table"], [1, "csvTable"], [4, "ngIf"], ["class", "csv-data", 3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["id", "trash", "data-testid", "trashBtn"], [1, "fa", "fa-trash"], ["id", "feedback", "data-testid", "feedbackInput", "placeholder", "Say something constructive...", "type", "text", "name", "text", "oninput", "this.style.height = \"\";\n                                            this.style.height = this.scrollHeight + 3 + \"px\"", 1, "input-box", 3, "ngModel", "ngModelChange"], ["id", "deduction", "data-testid", "deductionInput", "placeholder", "0", "type", "number", 1, "input-box", 3, "ngModel", "ngModelChange"], ["data-testid", "applyBtn", "type", "checkbox", 1, "checkbox", 3, "id", "ngModel", "ngModelChange"], [1, "grade-stats"], [3, "series", "chart", "xaxis", "yaxis", "title"], [1, "feedback-stats"], [1, "class-stats"], [1, "average-score"], [1, "min-score"], [1, "max-score"], [1, "feedback-count"], [1, "feedback-string"], [1, "file-warning", "inner-nowrap"], [1, "narrow", "csv-table-head"], [1, "wide", "csv-table-head"], [1, "csv-data", 3, "click"], [1, "narrow"], ["id", "feedback-column", 1, "wide"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Developed by: Emily Costa & Michael Sisko");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Advised by: Victor Norman");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Grading Assistant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "See demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Assignment Name:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_18_listener($event) { return ctx.assignmentName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_23_listener() { return ctx.previousStudent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Prev Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() { return ctx.nextStudent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Next Student");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_27_listener() { return ctx.showChart = !ctx.showChart; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_34_listener() { return ctx.saveProgress(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Save Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_36_listener() { return ctx.perfectScore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Perfect Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_38_listener() { return ctx.clearScore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Clear Score");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "table", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Deduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, AppComponent_tr_54_Template, 11, 5, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_56_listener() { return ctx.addRow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Add Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](60, AppComponent_div_60_Template, 20, 9, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Import Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_input_change_66_listener($event) { return ctx.fileChangeListener($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](68, AppComponent_p_68_Template, 2, 0, "p", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_69_listener() { return ctx.exportCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Export Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "table", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, AppComponent_thead_73_Template, 14, 0, "thead", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, AppComponent_tr_75_Template, 13, 6, "tr", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.assignmentName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Max Points: ", ctx.maxScore, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showChart ? "Hide Stats" : "Show Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Student Name: ", ctx.currentStudentName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.feedbackRows);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showChart);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.csvRecords);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__.ChartComponent], styles: [".title[_ngcontent-%COMP%] {\n  font-size: 20pt;\n}\n\n.panel[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 0px;\n  border-color: #8F9296;\n  margin: 0px;\n  box-shadow: none;\n  background-color: #2E3036;\n  color: #fefeff;\n  padding: 15px;\n}\n\n.col[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n#main-left-panel[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  min-width: 460px;\n  max-width: 33vw;\n}\n\n#main-right-panel[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 0px;\n  min-width: 600px;\n  width: calc(100% - 475px);\n  max-width: calc(67vw - 25px);\n  max-height: calc(100vh - 110px);\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n  flex-wrap: nowrap;\n  z-index: 900;\n  overflow-y: scroll;\n}\n\n.hide-outline[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n}\n\n.tight[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n#master-panel[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  min-height: 100vh;\n  max-height: 100vh;\n  padding-right: 10px;\n}\n\n.row[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.btn-primary-blue[_ngcontent-%COMP%] {\n  margin: 5px;\n  border: solid 1px #778AD5;\n  border-radius: 5px;\n  background-color: #778AD5;\n  padding: 3px 6px 3px 6px;\n  font-size: 14px;\n  color: #fff;\n  width: 112px;\n  text-align: center;\n}\n\n.btn-primary-blue[_ngcontent-%COMP%]:hover, .btn-primary-green[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  border: solid 1px #fff;\n}\n\n.btn-primary-green[_ngcontent-%COMP%] {\n  margin: 5px;\n  border: solid 1px #5AA263;\n  border-radius: 5px;\n  background-color: #5AA263;\n  font-size: 14px;\n  padding: 3px 6px 3px 6px;\n  color: #fff;\n  width: 112px;\n}\n\n.btn-set[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#addFeedbackBtn[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-left: 0px;\n}\n\n.csv-table-head[_ngcontent-%COMP%] {\n  background: #212225;\n  padding: 5px;\n  position: sticky;\n  top: 52px;\n}\n\n.input-box[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 5px;\n  border: solid 1px #212225;\n  background: #212225;\n  padding: 4px;\n  -moz-appearance: textfield;\n  resize: none;\n  font-size: 14px;\n  margin-top: 3px;\n  margin-right: 5px;\n  overflow: hidden;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n  color: #686A70;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n  color: #686A70;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  font-style: italic;\n  color: #686A70;\n}\n\n.input-box[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: solid 1px #fff;\n}\n\n#feedback[_ngcontent-%COMP%] {\n  width: 28vw;\n  min-width: 280px;\n  width: calc(33vw - 180px);\n}\n\n#deduction[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin-bottom: 2px;\n  margin-left: 5px;\n  z-index: 800;\n}\n\n#title[_ngcontent-%COMP%], #max-pts[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n\n#max-pts[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n#trash[_ngcontent-%COMP%] {\n  background-color: #EA6A62;\n  border-radius: 5px;\n  border: solid 1px #EA6A62;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  width: 27px;\n  height: 27px;\n  margin-top: 3px;\n}\n\n#trash[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: white;\n  border: solid 1px white;\n}\n\n#trash-header[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #ddd;\n  font-size: 14px;\n}\n\n.feedback-stats[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.feedback-count[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  font-weight: bold;\n}\n\n.grade-stats[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n\n\n.outer-nowrap[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n  text-align: left;\n}\n\n.inner-nowrap[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n#exportBtn[_ngcontent-%COMP%] {\n  float: right;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#csvImportBtn[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\n#csvFileUpload[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\ninput[type=file][_ngcontent-%COMP%]::file-selector-button {\n  display: none;\n}\n\n.csvTable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.csvTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .csvTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 14px;\n}\n\n.file-warning[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 14px;\n}\n\n.csvTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background: #25272a;\n}\n\n.csvTable[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  color: #33cc33;\n  background: #626366;\n}\n\n.csvTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  background: #414245;\n  cursor: pointer;\n}\n\n.csvTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  color: #BBB;\n  background: #212225;\n}\n\n.csvTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n\n.csvTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:focus, .csvTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:active {\n  border: 2px solid #778AD5;\n}\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: min-content3px;\n  white-space: nowrap;\n  flex-wrap: nowrap;\n}\n\n.wide[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n#feedback-column[_ngcontent-%COMP%] {\n  min-width: 190px;\n  flex-wrap: wrap;\n}\n\n#feedback-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\napx-chart[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.demo-text[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5%;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7QUFRSjs7QUFKQTtFQUNJLGFBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUUo7O0FBTkE7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0FBU0o7O0FBUEE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFVSjs7QUFSQTtFQUNJLGtCQUFBO0FBV0o7O0FBVEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFSQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQVdKOztBQVRBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFWQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQWFKOztBQWZBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBYUo7O0FBZkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFhSjs7QUFYQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQWNKOztBQVpBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFlSjs7QUFiQTtFQUNJLFdBQUE7QUFnQko7O0FBZEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWlCSjs7QUFmQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFtQko7O0FBakJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBb0JKOztBQWxCQTtFQUNJLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBcUJKOztBQW5CQTtFQUNJLFVBQUE7QUFzQko7O0FBcEJBO0VBQ0ksZ0JBQUE7RUFDQSxNQUFBO0FBdUJKOztBQW5CQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBc0JKOztBQWxCQTtFQUNJLGVBQUE7QUFxQko7O0FBbEJBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQXFCSjs7QUFsQkE7RUFDSSxhQUFBO0FBcUJKOztBQWpCQTs7eUNBQUE7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQW1CSjs7QUFoQkE7RUFDSSxxQkFBQTtBQW1CSjs7QUFoQkE7RUFDSSxZQUFBO0FBbUJKOztBQWhCQTtFQUNJLGFBQUE7QUFtQko7O0FBaEJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQW1CSjs7QUFoQkE7RUFDSSxZQUFBO0FBbUJKOztBQWhCQTtFQUNJLGFBQUE7QUFtQko7O0FBaEJBO0VBQ0ksV0FBQTtBQW1CSjs7QUFmQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBa0JKOztBQWZBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUFrQko7O0FBZkE7RUFDSSxtQkFBQTtBQWtCSjs7QUFmQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtBQWtCSjs7QUFmQTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQWtCSjs7QUFmQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQWtCSjs7QUFmQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQWtCSjs7QUFmQTtFQUNJLHlCQUFBO0FBa0JKOztBQWZBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBa0JKOztBQWhCQTtFQUNJLGVBQUE7QUFtQko7O0FBakJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBb0JKOztBQWxCQTtFQUNJLFdBQUE7QUFxQko7O0FBbEJBO0VBQ0ksWUFBQTtBQXFCSjs7QUFsQkE7RUFFSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQW9CSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQYW5lbCBzdHlsaW5nOlxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHQ7XG59XG4ucGFuZWwge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGJvcmRlci1jb2xvcjogIzhGOTI5NjtcbiAgICBtYXJnaW46IDBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRTMwMzY7XG4gICAgY29sb3I6ICNmZWZlZmY7XG4gICAgcGFkZGluZzogMTVweDtcbn1cbi5jb2wge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbiNtYWluLWxlZnQtcGFuZWwge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtaW4td2lkdGg6IDQ2MHB4O1xuICAgIG1heC13aWR0aDogMzN2dztcbn1cbiNtYWluLXJpZ2h0LXBhbmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgbWluLXdpZHRoOiA2MDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDc1cHgpO1xuICAgIG1heC13aWR0aDogY2FsYyg2N3Z3IC0gMjVweCk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDExMHB4KTtcbiAgICBtaW4taGVpZ2h0OiBtaW4tY29udGVudDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICB6LWluZGV4OiA5MDA7XG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmhpZGUtb3V0bGluZSB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4udGlnaHQge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cbiNtYXN0ZXItcGFuZWwge1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnJvdyB7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG59XG5cbi8vIEJ1dHRvbiBzdHlsaW5nOlxuYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuLmJ0bi1wcmltYXJ5LWJsdWUge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICM3NzhBRDU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzhBRDU7XG4gICAgcGFkZGluZzogM3B4IDZweCAzcHggNnB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bi1wcmltYXJ5LWJsdWU6aG92ZXIsIC5idG4tcHJpbWFyeS1ncmVlbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcbn1cbi5idG4tcHJpbWFyeS1ncmVlbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzVBQTI2MztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBQTI2MztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogM3B4IDZweCAzcHggNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMTJweDtcbn1cbi5idG4tc2V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYWRkRmVlZGJhY2tCdG4ge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4vLyBJbnB1dCBzdHlsaW5nOlxuLmNzdi10YWJsZS1oZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMjI1O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNTJweDtcbn1cbi5pbnB1dC1ib3gge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzIxMjIyNTtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMjI1O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjNjg2QTcwO1xufVxuLmlucHV0LWJveDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xufVxuI2ZlZWRiYWNrIHtcbiAgICB3aWR0aDogMjh2dztcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgIHdpZHRoOiBjYWxjKDMzdncgLSAxODBweCk7XG59XG4jZGVkdWN0aW9uIHtcbiAgICB3aWR0aDogNjBweDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB6LWluZGV4OiA4MDA7XG59XG4jdGl0bGUsICNtYXgtcHRzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiNtYXgtcHRzIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jdHJhc2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTZBNjI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNFQTZBNjI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDI3cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbiN0cmFzaDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xufVxuI3RyYXNoLWhlYWRlciB7XG4gICAgb3BhY2l0eTogMDtcbn1cbi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG4vLyBHZW5lcmFsIHN0eWxpbmdcbmxhYmVsIHtcbiAgICBjb2xvcjogI2RkZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8vIHN0eWxpbmcgZmVlZGJhY2sgc3RhdGlzdGljc1xuLmZlZWRiYWNrLXN0YXRzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mZWVkYmFjay1jb3VudCB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ3JhZGUtc3RhdHMge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFN0eWxpbmcgZm9yIENTViBzaWRlXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLm91dGVyLW5vd3JhcCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmlubmVyLW5vd3JhcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4jZXhwb3J0QnRuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG5cbmJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuI2NzdkltcG9ydEJ0biB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4jY3N2RmlsZVVwbG9hZCB7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG5pbnB1dFt0eXBlPWZpbGVdOjpmaWxlLXNlbGVjdG9yLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNzdlRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLy8gY3N2IHRhYmxlIHN0eWxpbmdcbi5jc3ZUYWJsZSB0aCwgLmNzdlRhYmxlIHRkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZmlsZS13YXJuaW5nIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNzdlRhYmxlIHRyOm50aC1jaGlsZCgybikge1xuICAgIGJhY2tncm91bmQ6ICMyNTI3MmE7XG59XG5cbi5jc3ZUYWJsZSB0ci5zZWxlY3RlZCB7XG4gICAgY29sb3I6ICMzM2NjMzM7XG4gICAgYmFja2dyb3VuZDogIzYyNjM2NlxufVxuXG4uY3N2VGFibGUgdGJvZHkgPiB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzQxNDI0NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jc3ZUYWJsZSB0aGVhZCB7XG4gICAgY29sb3I6ICNCQkI7XG4gICAgYmFja2dyb3VuZDogIzIxMjIyNTtcbn1cblxuLmNzdlRhYmxlIHRhYmxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY3N2VGFibGUgdGJvZHkgPiB0cjpmb2N1cywgLmNzdlRhYmxlIHRib2R5ID4gdHI6YWN0aXZlIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzc4QUQ1O1xufVxuXG4ubmFycm93IHtcbiAgICBtYXgtd2lkdGg6IG1pbi1jb250ZW50ICsgM3B4O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG59XG4ud2lkZSB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xufVxuI2ZlZWRiYWNrLWNvbHVtbiB7XG4gICAgbWluLXdpZHRoOiAxOTBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG4jZmVlZGJhY2stdGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLy8gSGlzdG9ncmFtIHN0eWxpbmdcbmFweC1jaGFydCB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uZGVtby10ZXh0IHtcbiAgICAvLyBwdXQgdGhlIHRleHQgb24gdGhlIHJpZ2h0IGVkZ2Ugb2YgdGhlIHNjcmVlblxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNSU7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG59Il19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 5835);
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-csv-parser */ 4885);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ 4256);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__.NgxCsvParserModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__.NgxCsvParserModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule] }); })();


/***/ }),

/***/ 7518:
/*!*************************************!*\
  !*** ./src/app/feedback.service.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackService": function() { return /* binding */ FeedbackService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ 8873);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-csv-parser */ 4885);




class FeedbackService {
    constructor(ngxCsvParser) {
        this.ngxCsvParser = ngxCsvParser;
        this.students = []; // store this in temp storage
        this.feedbacks = []; // store this in temp storage
        this.feedbackCounts = [];
    }
    parseFile(fileName) {
        // Check for empty CSV file
        if (fileName[0]["size"] > 3) {
            this.correctFile = true;
        }
        else {
            this.correctFile = false;
            this.clearStudents();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)("File is empty");
        }
        // reference: https://www.npmjs.com/package/ngx-csv-parser
        // Parse the file you want to select for the operation along with the configuration
        const response = this.ngxCsvParser.parse(fileName[0], { header: true, delimiter: ',' });
        return response;
    }
    parseCSV(csvRecords) {
        // console.log('Parser Result', result);
        // check headers if correct CSV file
        if (csvRecords[0] === undefined ||
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
        }
        else {
            console.log("Correct CSV File!");
            this.correctFile = true;
            this.createStudentsFromCsv(csvRecords);
        }
    }
    // Make a download button
    exportCSV(assignmentName) {
        // Remove forbidden characters from assignment title
        const title = this.cleanUpAssignmentTitle(assignmentName);
        // Get current date and time
        const currentDateTime = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('_YYYY-MM-DD');
        // Pass string into handle for data-table
        const my_data_string = this.buildCSV(this.students);
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
    buildCSV(students) {
        // console.log(JSON.stringify(students, null, 2));
        let my_data = students;
        let csv_file = '';
        // create header row
        const row = 'Identifier,Full name,Email address,Status,Grade,Maximum Grade,Grade can be changed,Last modified (submission),Online text,Last modified (grade),Feedback comments';
        // Add row and newline + carriage-return
        csv_file += row + '\r\n';
        // Build and add lines to csv_file
        for (let i = 0; i < my_data.length; i++) {
            let line = '';
            for (let index in my_data[i]) {
                if (line !== '') {
                    line += ','; // do comma-separation
                }
                if (index === 'gradeLastModified' || index === 'submissionLastModified') {
                    line += '"' + my_data[i][index] + '"';
                }
                else if (index == 'feedbackBoolean') {
                    let feedbackString = this.createCSVFeedbackString(my_data[i][index]);
                    // wrap each field in double quotes
                    line += '"' + feedbackString + '"';
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
    createCSVFeedbackString(feedback) {
        let feedbackStringArray = [];
        for (let n = 0; n < this.feedbacks.length; n++) {
            if (feedback[n]) {
                // if the feedback string has a double quote in it, add an extra one.
                const res = this.feedbacks[n].feedback.replace(/"/g, '""');
                feedbackStringArray.push("-" + this.feedbacks[n].deduction + ": " + res);
            }
        }
        const feedbackString = feedbackStringArray.join('; ');
        return feedbackString;
    }
    createStudentsFromCsv(csvRecords) {
        // console.log(JSON.stringify(csvRecords, null, 2));
        // put csv-parser results into newStudent[]
        for (let i = 0; i < csvRecords.length; i++) {
            // initialize each student object
            const newStudent = {
                identifier: csvRecords[i]["Identifier"],
                fullName: csvRecords[i]["Full name"],
                email: csvRecords[i]["Email address"].split("@", 1)[0],
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
                feedbackBoolean: new Array(this.feedbacks.length).fill(false),
            };
            this.students.push(newStudent);
        }
        // set assignment max score
        this.maxScore = this.students[0].maxGrade;
    }
    clearStudents() {
        this.students = [];
    }
    sortStudentsOnEmail(ascending) {
    }
    cleanUpAssignmentTitle(assignmentName) {
        // Remove forbidden characters from assignment title
        assignmentName = assignmentName.replace(/[#<>^\-~$%!&*,.;\\"?'\/{}:@+`|=\[\]]/g, '');
        assignmentName = assignmentName.replace(/' '/g, '_');
        if (assignmentName === '') {
            assignmentName = "assignment";
        }
        return assignmentName;
    }
    exportDataAsJson(assignmentName) {
        // const jsonStudents = JSON.stringify(this.students);
        // const jsonFeedbacks = JSON.stringify(this.feedbacks);
        // const jsonAssignmentName = JSON.stringify(assignmentName);  // not sure this is necessary.
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
    getStudents() {
        return this.students;
    }
    feedbackCreate(feedbackString, points) {
        const newFeedback = {
            feedback: feedbackString,
            deduction: points
        };
        this.feedbacks.push(newFeedback);
        // add this feedback to the student feedback array as false
        for (let i = 0; i < this.students.length; i++) {
            this.students[i].feedbackBoolean.push(false);
        }
    }
    feedbackRead() {
        return this.feedbacks;
    }
    feedbackStringUpdate(index, feedbackString) {
        // update values in feedback array
        this.feedbacks[index].feedback = feedbackString;
    }
    feedbackDeductionUpdate(index, points) {
        this.feedbacks[index].deduction = points;
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].feedbackBoolean[index]) {
                this.gradeUpdate(i);
            }
        }
    }
    feedbackDelete(index) {
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
    feedbackApply(feedbackIndex, studentIndex) {
        this.students[studentIndex].feedbackBoolean[feedbackIndex] = true;
        // update grade
        this.gradeUpdate(studentIndex);
    }
    feedbackUnapply(feedbackIndex, studentIndex) {
        this.students[studentIndex].feedbackBoolean[feedbackIndex] = false;
        this.gradeUpdate(studentIndex);
    }
    gradeUpdate(studentIndex) {
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
    perfectGrade(studentIndex) {
        this.students[studentIndex].grade = this.maxScore;
        // set all boolean feedback to false
        for (let n = 0; n < this.feedbacks.length; n++) {
            this.students[studentIndex].feedbackBoolean[n] = false;
        }
    }
    clearGrade(studentIndex) {
        this.students[studentIndex].grade = "";
        // set all boolean feedback to false
        for (let n = 0; n < this.feedbacks.length; n++) {
            this.students[studentIndex].feedbackBoolean[n] = false;
        }
    }
    // Return an array of arrays of strings -- outer array is per student, inner array is feedback strings
    // for that student.
    getFeedbackStrings() {
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
    updateChartData() {
        let chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        // loop through each student to put data into histogram
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].grade != "") {
                const numGrade = Math.round((parseFloat(this.students[i].grade) / parseFloat(this.maxScore)) * 100);
                // console.log(parseFloat(this.maxScore));
                // console.log(numGrade);
                // make sure in range 0 to 100
                if (numGrade >= 0 && numGrade <= 100) {
                    if (numGrade <= 9) {
                        // 0 to 9
                        chartData[0] += 1;
                    }
                    else if (numGrade <= 19) {
                        // 10 to 19
                        chartData[1] += 1;
                    }
                    else if (numGrade <= 29) {
                        // 20 to 29
                        chartData[2] += 1;
                    }
                    else if (numGrade <= 39) {
                        // 30 to 39
                        chartData[3] += 1;
                    }
                    else if (numGrade <= 49) {
                        // 40 to 49
                        chartData[4] += 1;
                    }
                    else if (numGrade <= 59) {
                        // 50 to 59
                        chartData[5] += 1;
                    }
                    else if (numGrade <= 69) {
                        // 60 to 69
                        chartData[6] += 1;
                    }
                    else if (numGrade <= 79) {
                        // 70 to 79
                        chartData[7] += 1;
                    }
                    else if (numGrade <= 89) {
                        // 80 to 89
                        chartData[8] += 1;
                    }
                    else if (numGrade <= 100) {
                        // 90 to 100
                        chartData[9] += 1;
                    }
                }
            }
        }
        return chartData;
    }
    updateFeedbackCount() {
        // count the number of times each feedback is applied
        // the deduction value is the count vlaue
        this.feedbackCounts = [];
        for (let n = 0; n < this.feedbacks.length; n++) {
            if (this.feedbacks[n].feedback != "") {
                const newFeedback = {
                    feedback: this.feedbacks[n].feedback,
                    deduction: 0
                };
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
    updateAverageStat() {
        let avg = 0;
        let count = 0;
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].grade != "") {
                const numGrade = Math.round((parseFloat(this.students[i].grade) / parseFloat(this.maxScore)) * 100);
                avg += numGrade;
                count += 1;
            }
        }
        return (avg / count);
    }
    updateMinMaxStats() {
        let min = 0;
        let max = 0;
        let arrayGrades = [];
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].grade != "") {
                const numGrade = Math.round((parseFloat(this.students[i].grade) / parseFloat(this.maxScore)) * 100);
                arrayGrades.push(numGrade);
            }
        }
        min = Math.min.apply(Math, arrayGrades);
        max = Math.max.apply(Math, arrayGrades);
        return [min, max];
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__.NgxCsvParser)); };
FeedbackService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(4431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map