(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkgrading_app"] = self["webpackChunkgrading_app"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    5041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeedbackRow": function FeedbackRow() {
          return (
            /* binding */
            _FeedbackRow
          );
        },

        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      4762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _feedback_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./feedback.service */
      7518);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-apexcharts */
      4256);

      var _c0 = ["chart"];

      function AppComponent_tr_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_tr_52_Template_td_click_1_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var i_r8 = restoredCtx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r9.deleteRow(i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "textarea", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_52_Template_textarea_ngModelChange_5_listener($event) {
            var row_r7 = ctx.$implicit;
            return row_r7.feedback = $event;
          })("ngModelChange", function AppComponent_tr_52_Template_textarea_ngModelChange_5_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var i_r8 = restoredCtx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r12.onFeedbackChange($event, i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "                                        ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_52_Template_input_ngModelChange_8_listener($event) {
            var row_r7 = ctx.$implicit;
            return row_r7.deduction = $event;
          })("ngModelChange", function AppComponent_tr_52_Template_input_ngModelChange_8_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var i_r8 = restoredCtx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r14.onDeductionChange($event, i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_tr_52_Template_input_ngModelChange_10_listener($event) {
            var row_r7 = ctx.$implicit;
            return row_r7.selected = $event;
          })("ngModelChange", function AppComponent_tr_52_Template_input_ngModelChange_10_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

            var i_r8 = restoredCtx.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.onSelectedChange($event, i_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var row_r7 = ctx.$implicit;
          var i_r8 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r7.feedback);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r7.deduction);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "checkbox", i_r8, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", row_r7.selected);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("disabled", ctx_r0.isCheckDisabled ? true : null);
        }
      }

      function AppComponent_div_58_tr_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stats_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", stats_r18.deduction, ":");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stats_r18.feedback);
        }
      }

      function AppComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "apx-chart", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Feedback Count:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_58_tr_6_Template, 5, 2, "tr", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Grade Stats:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "td", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "td", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

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
        }
      }

      function AppComponent_p_66_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*Invalid CSV File");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_thead_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_thead_77_Template_th_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.sortOnName();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_thead_77_Template_th_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.sortOnEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_thead_77_Template_th_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.sortOnTimestamp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Timestamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_thead_77_Template_th_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.sortOnGrade();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Grade");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_thead_77_Template_th_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r24.sortOnFeedback();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Feedback");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_tr_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_tr_79_Template_tr_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var i_r25 = restoredCtx.index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.rowSelected(i_r25);
          })("click", function AppComponent_tr_79_Template_tr_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var i_r25 = restoredCtx.index;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r29.highlightRow(i_r25);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var stud_r26 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stud_r26.fullName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stud_r26.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stud_r26.gradeLastModified);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](stud_r26.grade);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.feedbackStrings[stud_r26.num]);
        }
      }

      var _FeedbackRow = function _FeedbackRow() {
        _classCallCheck(this, _FeedbackRow);
      }; // These two enums are for sorting student info.


      var SortColumn;

      (function (SortColumn) {
        SortColumn[SortColumn["ID"] = 0] = "ID";
        SortColumn[SortColumn["NAME"] = 1] = "NAME";
        SortColumn[SortColumn["EMAIL"] = 2] = "EMAIL";
        SortColumn[SortColumn["TIMESTAMP"] = 3] = "TIMESTAMP";
        SortColumn[SortColumn["GRADE"] = 4] = "GRADE";
        SortColumn[SortColumn["FEEDBACK"] = 5] = "FEEDBACK";
      })(SortColumn || (SortColumn = {}));

      ;
      var SortDir;

      (function (SortDir) {
        SortDir[SortDir["ASC"] = 0] = "ASC";
        SortDir[SortDir["DESC"] = 1] = "DESC";
      })(SortDir || (SortDir = {}));

      ;

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(fb, feedbackService) {
          _classCallCheck(this, _AppComponent);

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
          this.feedbackCount = [];
          this.feedbackStrings = [];
          this.header = false;
          this.feedbackRows = []; // disable check boxes when no csv is imported

          this.isCheckDisabled = true;
          this.studentsSortedOn = SortColumn.ID;
          this.studentsSortedAscOrDsc = SortDir.ASC;
          var newRow = {
            feedback: "",
            deduction: 0,
            selected: false
          };
          this.feedbackRows.push(newRow);
          this.feedbackService.feedbackCreate(null, null);
          this.chartOptions = {
            series: [{
              name: "Grades",
              data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }],
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
                offsetX: -20
              },
              categories: ["0-9", "10-19", "20-29", "30-39", "40-49", "50-59", "60-69", "70-79", "80-89", "90-100"]
            },
            states: {
              hover: {
                filter: {
                  type: "none"
                }
              }
            }
          };
        }

        _createClass(_AppComponent, [{
          key: "importCsvFileListener",
          value: function importCsvFileListener($event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var file;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(this.students !== undefined)) {
                        _context.next = 7;
                        break;
                      }

                      if (!confirm("Are you sure you want to upload another CSV file? Your current work will be deleted!")) {
                        _context.next = 5;
                        break;
                      }

                      // do nothing
                      console.log("User pressed Yes!");
                      _context.next = 7;
                      break;

                    case 5:
                      console.log("User pressed No!");
                      return _context.abrupt("return");

                    case 7:
                      this.feedbackService.clearStudents(); // Select the file from the event

                      file = $event.srcElement.files; // wait for this to return

                      this.feedbackService.parseFile(file).subscribe(function (result) {
                        if (result instanceof Array) {
                          _this.feedbackService.parseCSV(result);

                          _this.students = _this.feedbackService.getStudents();
                          _this.studentsSortedAscOrDsc = SortDir.ASC;
                          _this.studentsSortedOn = SortColumn.ID;
                          _this.validFile = _this.feedbackService.correctFile;

                          if (_this.validFile) {
                            // select and highlight first student
                            _this.currentStudentIndex = 0;
                            _this.maxScore = _this.feedbackService.maxScore; // get feedback strings to display

                            _this.feedbackStrings = _this.feedbackService.getFeedbackStrings(); // enable checkboxes

                            _this.isCheckDisabled = null; // uncheck check boxes

                            _this.updateCheckboxState(); // reset chart data


                            _this.updateSeries();
                          } else {
                            _this.maxScore = null;
                            console.log('Error Bad CSV');
                          }
                        } else {
                          // handle empty CSV
                          _this.maxScore = null;
                          _this.students = [];
                          console.log('Error', result);
                        }
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "importJsonFileListener",
          value: function importJsonFileListener($event) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var feedbackData;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.feedbackService.importDataAsJson($event.srcElement.files);

                    case 2:
                      this.feedbackStrings = this.feedbackService.getFeedbackStrings();
                      this.students = this.feedbackService.getStudents();
                      this.studentsSortedAscOrDsc = SortDir.ASC;
                      this.studentsSortedOn = SortColumn.ID;
                      this.validFile = true;
                      this.currentStudentIndex = -1;
                      this.maxScore = this.feedbackService.maxScore;
                      this.isCheckDisabled = null; // build feedbackRows

                      feedbackData = this.feedbackService.getFeedbacks();
                      this.feedbackRows = [];
                      feedbackData.forEach(function (row) {
                        _this2.feedbackRows.push({
                          feedback: row.feedback,
                          deduction: row.deduction,
                          selected: false
                        });
                      });
                      this.assignmentName = this.feedbackService.getAssignmentName();

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {// no-op
          }
        }, {
          key: "highlightRow",
          value: function highlightRow(row) {
            // add 'selected' class to tr element
            var trs = document.querySelectorAll("tr.csv-data");

            if (!this.isRowSelected) {
              this.isRowSelected = true;
            } else {
              trs[this.previousRow].classList.remove("selected");
            }

            trs[row].classList.add("selected");
            this.previousRow = row;
          }
        }, {
          key: "rowSelected",
          value: function rowSelected(index) {
            this.currentStudentIndex = index;
            this.currentStudentName = this.students[index].fullName;
            this.maxScore = this.students[0].maxGrade; // code to check boxes off when on a certain student

            this.updateCheckboxState(); // console.log(this.csvRecords);
          }
        }, {
          key: "updateCheckboxState",
          value: function updateCheckboxState() {
            if (this.currentStudentIndex === -1) {
              return;
            } // console.log("Update Check Boxes");
            // console.log('student feedbackBoolean array = ', this.students[this.currentStudentIndex].feedbackBoolean);


            for (var i = 0; i < this.students[this.currentStudentIndex].feedbackBoolean.length; i++) {
              var checkbox = document.getElementById("checkbox" + i.toString());

              if (this.students[this.currentStudentIndex].feedbackBoolean[i]) {
                checkbox.checked = true;
              } else {
                checkbox.checked = false;
              }
            }
          }
        }, {
          key: "studentParser",
          value: function studentParser(increment) {
            if (this.currentStudentIndex === 0 && increment === -1 || this.currentStudentIndex === this.students.length - 1 && increment === 1) {
              return;
            }

            this.currentStudentIndex += increment;
            this.rowSelected(this.currentStudentIndex);
            this.highlightRow(this.currentStudentIndex);
            this.validFile = this.feedbackService.correctFile;
          }
        }, {
          key: "nextStudent",
          value: function nextStudent() {
            this.studentParser(1);
          }
        }, {
          key: "previousStudent",
          value: function previousStudent() {
            if (this.currentStudentIndex > 0) {
              this.studentParser(-1);
            }
          }
        }, {
          key: "addRow",
          value: function addRow() {
            var newRow = {
              feedback: "",
              deduction: 0,
              selected: false
            };
            this.feedbackRows.push(newRow);
            this.feedbackService.feedbackCreate(null, null); // console.log(this.feedbackRows);
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(index) {
            // add row so there will never be 0 rows
            if (this.feedbackRows.length === 1) {
              this.addRow();
            }

            this.feedbackRows.splice(index, 1);
            this.feedbackService.feedbackDelete(index); // update students' feedback string display

            this.updateCheckboxState();
            this.feedbackStrings = this.feedbackService.getFeedbackStrings();
            this.updateSeries();
          }
        }, {
          key: "onFeedbackChange",
          value: function onFeedbackChange(newValue, index) {
            this.feedbackService.feedbackStringUpdate(index, newValue); // update students' feedback string display

            this.feedbackStrings = this.feedbackService.getFeedbackStrings();
            this.updateSeries();
          }
        }, {
          key: "onDeductionChange",
          value: function onDeductionChange(newValue, index) {
            this.feedbackService.feedbackDeductionUpdate(index, newValue);
            this.feedbackStrings = this.feedbackService.getFeedbackStrings();
            this.updateSeries();
          }
        }, {
          key: "onSelectedChange",
          value: function onSelectedChange(newValue, feedbackIndex) {
            if (this.currentStudentIndex === 0) {
              this.highlightRow(this.currentStudentIndex);
            }

            if (this.currentStudentIndex >= 0) {
              if (newValue === true) {
                this.feedbackService.feedbackApply(feedbackIndex, this.currentStudentIndex);
              } else {
                this.feedbackService.feedbackUnapply(feedbackIndex, this.currentStudentIndex);
              } // update students' feedback string display


              this.feedbackStrings = this.feedbackService.getFeedbackStrings();
              this.updateSeries();
            }
          }
        }, {
          key: "saveProgress",
          value: function saveProgress() {
            this.feedbackService.exportDataAsJson(this.assignmentName);
          }
        }, {
          key: "perfectScore",
          value: function perfectScore() {
            if (this.currentStudentIndex >= 0) {
              this.feedbackService.perfectGrade(this.currentStudentIndex);
            }

            this.updateCheckboxState(); // update students' feedback string display

            this.feedbackStrings = this.feedbackService.getFeedbackStrings();
            this.updateSeries();
          }
        }, {
          key: "clearScore",
          value: function clearScore() {
            if (this.currentStudentIndex >= 0) {
              this.feedbackService.clearGrade(this.currentStudentIndex);
            }

            this.updateCheckboxState(); // update students' feedback string display

            this.feedbackStrings = this.feedbackService.getFeedbackStrings();
            console.log(this.feedbackCount);
            this.updateSeries();
          }
        }, {
          key: "sortOnName",
          value: function sortOnName() {
            console.log("hi from sort on name");

            if (this.studentsSortedOn !== SortColumn.NAME) {
              this.studentsSortedOn = SortColumn.NAME;
              this.studentsSortedAscOrDsc = SortDir.ASC;
            } else {
              // already sorted on this column, so switch direction
              this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
            }
          }
        }, {
          key: "sortOnEmail",
          value: function sortOnEmail() {
            var _this3 = this;

            console.log("hi from sort on email");

            if (this.studentsSortedOn !== SortColumn.EMAIL) {
              this.studentsSortedOn = SortColumn.EMAIL;
              this.studentsSortedAscOrDsc = SortDir.ASC;
            } else {
              // already sorted on this column, so switch direction
              this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
            }

            this.students = this.students.sort(function (s1, s2) {
              return _this3.studentsSortedAscOrDsc === SortDir.ASC ? s2.email.localeCompare(s1.email) : s1.email.localeCompare(s2.email);
            });
          }
        }, {
          key: "sortOnTimestamp",
          value: function sortOnTimestamp() {
            console.log("hi from sort on timestamp");

            if (this.studentsSortedOn !== SortColumn.TIMESTAMP) {
              this.studentsSortedOn = SortColumn.TIMESTAMP;
              this.studentsSortedAscOrDsc = SortDir.ASC;
            } else {
              // already sorted on this column, so switch direction
              this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
            }
          }
        }, {
          key: "sortOnGrade",
          value: function sortOnGrade() {
            console.log("hi from sort on grade");

            if (this.studentsSortedOn !== SortColumn.GRADE) {
              this.studentsSortedOn = SortColumn.GRADE;
              this.studentsSortedAscOrDsc = SortDir.ASC;
            } else {
              // already sorted on this column, so switch direction
              this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
            }
          }
        }, {
          key: "sortOnFeedback",
          value: function sortOnFeedback() {
            console.log("hi from sort on feedback");

            if (this.studentsSortedOn !== SortColumn.FEEDBACK) {
              this.studentsSortedOn = SortColumn.FEEDBACK;
              this.studentsSortedAscOrDsc = SortDir.ASC;
            } else {
              // already sorted on this column, so switch direction
              this.studentsSortedAscOrDsc = this.studentsSortedAscOrDsc === SortDir.ASC ? SortDir.DESC : SortDir.ASC;
            }
          } // To Do: Delete Later! Useful for Debugging!
          // tempFunction() {
          //   this.feedback = this.feedbackService.feedbackRead();
          //   console.log(this.feedback);
          //   console.log(this.feedbackCount);
          //   console.log(this.csvRecords);
          // }

        }, {
          key: "updateSeries",
          value: function updateSeries() {
            var chartData = this.feedbackService.updateChartData(); // update data in chart

            this.chartOptions.series = [{
              data: chartData
            }];
            this.feedbackCount = this.feedbackService.updateFeedbackCount();
            this.averageScore = this.feedbackService.updateAverageStat();

            var _this$feedbackService = this.feedbackService.updateMinMaxStats();

            var _this$feedbackService2 = _slicedToArray(_this$feedbackService, 2);

            this.minScore = _this$feedbackService2[0];
            this.maxScoreStat = _this$feedbackService2[1];
          }
        }, {
          key: "exportCSV",
          value: function exportCSV() {
            this.feedbackService.exportCSV(this.assignmentName);
          } // Warn user if reloading, closing, navigating away from page.

        }, {
          key: "unloadHandler",
          value: function unloadHandler(event) {
            window.opener.location.reload();
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_feedback_service__WEBPACK_IMPORTED_MODULE_0__.FeedbackService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
          }
        },
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("beforeunload", function AppComponent_beforeunload_HostBindingHandler($event) {
              return ctx.unloadHandler($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
          }
        },
        decls: 80,
        vars: 9,
        consts: [["id", "master-panel", 1, "panel", "panel-default", "hide-outline"], [1, "title"], [1, "demo-text"], ["href", "assets/demo_full.mp4"], [1, "row"], ["id", "main-left-panel", 1, "col", "fixed-panel"], [1, "panel", "panel-default", "hide-outline", "tight"], [1, "panel", "panel-default"], ["id", "item-info", 1, "panel", "panel-default", "hide-outline", "tight"], ["id", "assignment"], ["for", "assignment"], ["type", "text", "id", "title", "name", "assignment", "placeholder", "Ex. Homework 1", "data-testid", "nameInput", 1, "input-box", 3, "ngModel", "ngModelChange"], ["id", "max-pts"], ["for", "max-pts"], [1, "panel", "panel-default", "hide-outline", "tight", "btn-set"], ["type", "button", "data-testid", "prevStudentBtn", 1, "btn-primary-blue", 3, "click"], ["type", "button", "data-testid", "nextStudentBtn", 1, "btn-primary-blue", 3, "click"], ["type", "button", 1, "btn-primary-blue", 3, "click"], ["for", "Student"], ["type", "button", "id", "save-btn", 1, "btn-primary-green", 3, "click"], [1, "feedback-table-container"], ["id", "feedback-table"], ["id", "trash-header"], [4, "ngFor", "ngForOf"], ["type", "button", "id", "addFeedbackBtn", "data-testid", "addFeedbackBtn", 1, "btn-primary-blue", 3, "click"], ["class", "grade-stats", 4, "ngIf"], ["id", "main-right-panel", 1, "panel", "panel-default"], [1, "csv-import-btn"], [1, "panel", "panel-default", "tight", "hide-outline", "sticky", "outer-nowrap"], ["for", "csvFileUpload", "id", "csvImportBtn", 1, "btn-primary-blue", "inner-nowrap"], ["id", "csvFileUpload", "data-testid", "importCSV", "type", "file", "name", "File Upload", "accept", ".csv", 1, "inner-nowrap", "sticky", 3, "change"], ["fileImportInput", ""], ["class", "file-warning inner-nowrap", 4, "ngIf"], ["type", "button", "id", "exportBtn", 1, "btn-primary-blue", 3, "click"], ["type", "button", "id", "save-btn", 1, "btn-primary-blue", 3, "click"], ["for", "jsonFileUpload", "id", "jsonImportBtn", 1, "btn-primary-blue", "inner-nowrap"], ["id", "jsonFileUpload", "data-testid", "importJSON", "type", "file", "name", "File Upload", "accept", ".json", 1, "inner-nowrap", "sticky", 3, "change"], [1, "panel", "panel-default", "tight", "hide-outline", "csv-result-table"], [1, "csvTable"], [4, "ngIf"], ["class", "csv-data", 3, "click", 4, "ngFor", "ngForOf"], [3, "click"], ["id", "trash", "data-testid", "trashBtn"], [1, "fa", "fa-trash"], ["id", "feedback", "data-testid", "feedbackInput", "placeholder", "Say something constructive...", "type", "text", "name", "text", "oninput", "this.style.height = \"\";\n                                            this.style.height = this.scrollHeight + 3 + \"px\"", 1, "input-box", 3, "ngModel", "ngModelChange"], ["id", "deduction", "data-testid", "deductionInput", "placeholder", "0", "type", "number", 1, "input-box", 3, "ngModel", "ngModelChange"], ["data-testid", "applyBtn", "type", "checkbox", 1, "checkbox", 3, "id", "ngModel", "ngModelChange"], [1, "grade-stats"], [3, "series", "chart", "xaxis", "yaxis", "title"], [1, "feedback-stats"], [1, "class-stats"], [1, "average-score"], [1, "min-score"], [1, "max-score"], [1, "feedback-count"], [1, "feedback-string"], [1, "file-warning", "inner-nowrap"], [1, "narrow", "csv-table-head", 3, "click"], [1, "wide", "csv-table-head", 3, "click"], [1, "csv-data", 3, "click"], [1, "narrow"], ["id", "feedback-column", 1, "wide"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Assignment Name:\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_18_listener($event) {
              return ctx.assignmentName = $event;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_23_listener() {
              return ctx.previousStudent();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Prev Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() {
              return ctx.nextStudent();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Next Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_27_listener() {
              return ctx.showChart = !ctx.showChart;
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_34_listener() {
              return ctx.perfectScore();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Perfect Score");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_36_listener() {
              return ctx.clearScore();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Clear Score");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "table", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "th", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Deduction");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, AppComponent_tr_52_Template, 11, 5, "tr", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "button", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_54_listener() {
              return ctx.addRow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Add Feedback");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](57, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](58, AppComponent_div_58_Template, 20, 9, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Import File (exported from Moodle)");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 30, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_input_change_64_listener($event) {
              return ctx.importCsvFileListener($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, AppComponent_p_66_Template, 2, 0, "p", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_67_listener() {
              return ctx.exportCSV();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Export for Moodle");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_69_listener() {
              return ctx.saveProgress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Save Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "label", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, " Load Progress");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "input", 36, 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function AppComponent_Template_input_change_73_listener($event) {
              return ctx.importJsonFileListener($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "table", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](77, AppComponent_thead_77_Template, 12, 0, "thead", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](79, AppComponent_tr_79_Template, 11, 5, "tr", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.assignmentName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Max Points: ", ctx.maxScore, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showChart ? "Hide Stats" : "Show Stats");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Student Name: ", ctx.currentStudentName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.feedbackRows);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showChart);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.validFile);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.validFile);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.students);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__.ChartComponent],
        styles: [".title[_ngcontent-%COMP%] {\n  font-size: 20pt;\n}\n\n.panel[_ngcontent-%COMP%] {\n  padding: 10px;\n  border-radius: 0px;\n  border-color: #8F9296;\n  margin: 0px;\n  box-shadow: none;\n  background-color: #2E3036;\n  color: #fefeff;\n  padding: 15px;\n}\n\n.col[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n#main-left-panel[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  min-width: 460px;\n  max-width: 33vw;\n}\n\n#main-right-panel[_ngcontent-%COMP%] {\n  padding: 10px;\n  padding-top: 0px;\n  min-width: 600px;\n  width: calc(100% - 475px);\n  max-width: calc(67vw - 25px);\n  max-height: calc(100vh - 110px);\n  min-height: -webkit-min-content;\n  min-height: -moz-min-content;\n  min-height: min-content;\n  flex-wrap: nowrap;\n  z-index: 900;\n  overflow-y: scroll;\n}\n\n.hide-outline[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n}\n\n.tight[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\n#master-panel[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  min-height: 100vh;\n  max-height: 100vh;\n  padding-right: 10px;\n}\n\n.row[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.btn-primary-blue[_ngcontent-%COMP%] {\n  margin: 5px;\n  border: solid 1px #778AD5;\n  border-radius: 5px;\n  background-color: #778AD5;\n  padding: 3px 6px 3px 6px;\n  font-size: 14px;\n  color: #fff;\n  text-align: center;\n}\n\n.btn-primary-blue[_ngcontent-%COMP%]:hover, .btn-primary-green[_ngcontent-%COMP%]:hover {\n  background: transparent;\n  border: solid 1px #fff;\n}\n\n.btn-primary-green[_ngcontent-%COMP%] {\n  margin: 5px;\n  border: solid 1px #5AA263;\n  border-radius: 5px;\n  background-color: #5AA263;\n  font-size: 14px;\n  padding: 3px 6px 3px 6px;\n  color: #fff;\n  width: 112px;\n}\n\n.btn-set[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#addFeedbackBtn[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-left: 0px;\n}\n\n.csv-table-head[_ngcontent-%COMP%] {\n  background: #212225;\n  padding: 5px;\n  position: sticky;\n  top: 52px;\n}\n\n.input-box[_ngcontent-%COMP%] {\n  height: 30px;\n  border-radius: 5px;\n  border: solid 1px #212225;\n  background: #212225;\n  padding: 4px;\n  -moz-appearance: textfield;\n  resize: none;\n  font-size: 14px;\n  margin-top: 3px;\n  margin-right: 5px;\n  overflow: hidden;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  font-style: italic;\n  color: #686A70;\n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  font-style: italic;\n  color: #686A70;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  font-style: italic;\n  color: #686A70;\n}\n\n.input-box[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: solid 1px #fff;\n}\n\n#feedback[_ngcontent-%COMP%] {\n  width: 28vw;\n  min-width: 280px;\n  width: calc(33vw - 180px);\n}\n\n#deduction[_ngcontent-%COMP%] {\n  width: 60px;\n}\n\ninput[type=checkbox][_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  margin-bottom: 2px;\n  margin-left: 5px;\n  z-index: 800;\n}\n\n#title[_ngcontent-%COMP%], #max-pts[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-right: 10px;\n  margin-bottom: 5px;\n}\n\n#max-pts[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n}\n\n#trash[_ngcontent-%COMP%] {\n  background-color: #EA6A62;\n  border-radius: 5px;\n  border: solid 1px #EA6A62;\n  color: white;\n  font-size: 16px;\n  cursor: pointer;\n  width: 27px;\n  height: 27px;\n  margin-top: 3px;\n}\n\n#trash[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: white;\n  border: solid 1px white;\n}\n\n#trash-header[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #ddd;\n  font-size: 14px;\n}\n\n.feedback-stats[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.feedback-count[_ngcontent-%COMP%] {\n  padding-right: 5px;\n  font-weight: bold;\n}\n\n.grade-stats[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n\n\n.outer-nowrap[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 100%;\n  text-align: left;\n}\n\n.inner-nowrap[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nbutton[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n#csvImportBtn[_ngcontent-%COMP%], #jsonImportBtn[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-bottom: 10px;\n}\n\ninput[type=file][_ngcontent-%COMP%]::file-selector-button {\n  display: none;\n}\n\n.csvTable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.csvTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .csvTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n  font-size: 14px;\n}\n\n.file-warning[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 14px;\n}\n\n.csvTable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2n) {\n  background: #25272a;\n}\n\n.csvTable[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  color: #33cc33;\n  background: #626366;\n}\n\n.csvTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:hover {\n  background: #414245;\n  cursor: pointer;\n}\n\n.csvTable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  color: #BBB;\n  background: #212225;\n}\n\n.csvTable[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 100%;\n}\n\n.csvTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:focus, .csvTable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]:active {\n  border: 2px solid #778AD5;\n}\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: min-content3px;\n  white-space: nowrap;\n  flex-wrap: nowrap;\n}\n\n.wide[_ngcontent-%COMP%] {\n  min-width: 100%;\n}\n\n#feedback-column[_ngcontent-%COMP%] {\n  min-width: 190px;\n  flex-wrap: wrap;\n}\n\n#feedback-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\napx-chart[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.demo-text[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 5%;\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGVBQUE7QUFBSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLCtCQUFBO0VBQUEsNEJBQUE7RUFBQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTUo7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7QUFRSjs7QUFKQTtFQUNJLGFBQUE7QUFPSjs7QUFMQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFRSjs7QUFOQTtFQUNJLHVCQUFBO0VBQ0Esc0JBQUE7QUFTSjs7QUFQQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVVKOztBQVJBO0VBQ0ksa0JBQUE7QUFXSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVlKOztBQVJBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBV0o7O0FBVEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVlKOztBQVZBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBYUo7O0FBZkE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7QUFhSjs7QUFmQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQWFKOztBQVhBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FBY0o7O0FBWkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWVKOztBQWJBO0VBQ0ksV0FBQTtBQWdCSjs7QUFkQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBaUJKOztBQWZBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBa0JKOztBQWhCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFvQko7O0FBbEJBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFxQko7O0FBbkJBO0VBQ0ksVUFBQTtBQXNCSjs7QUFwQkE7RUFDSSxnQkFBQTtFQUNBLE1BQUE7QUF1Qko7O0FBbkJBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFzQko7O0FBbEJBO0VBQ0ksZUFBQTtBQXFCSjs7QUFsQkE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBcUJKOztBQWxCQTtFQUNJLGFBQUE7QUFxQko7O0FBakJBOzt5Q0FBQTs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBbUJKOztBQWhCQTtFQUNJLHFCQUFBO0FBbUJKOztBQWhCQTtFQUNJLGFBQUE7QUFtQko7O0FBaEJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQW1CSjs7QUFoQkE7RUFDSSxhQUFBO0FBbUJKOztBQWhCQTtFQUNJLFdBQUE7QUFtQko7O0FBZkE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQWtCSjs7QUFmQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FBa0JKOztBQWZBO0VBQ0ksbUJBQUE7QUFrQko7O0FBZkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUFrQko7O0FBZkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFrQko7O0FBZkE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFrQko7O0FBZkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUFrQko7O0FBZkE7RUFDSSx5QkFBQTtBQWtCSjs7QUFmQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxlQUFBO0FBbUJKOztBQWpCQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQW9CSjs7QUFsQkE7RUFDSSxXQUFBO0FBcUJKOztBQWxCQTtFQUNJLFlBQUE7QUFxQko7O0FBbEJBO0VBRUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7QUFvQkoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGFuZWwgc3R5bGluZzpcbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB0O1xufVxuLnBhbmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItY29sb3I6ICM4RjkyOTY7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUzMDM2O1xuICAgIGNvbG9yOiAjZmVmZWZmO1xuICAgIHBhZGRpbmc6IDE1cHg7XG59XG4uY29sIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4jbWFpbi1sZWZ0LXBhbmVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgbWluLXdpZHRoOiA0NjBweDtcbiAgICBtYXgtd2lkdGg6IDMzdnc7XG59XG4jbWFpbi1yaWdodC1wYW5lbCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIG1pbi13aWR0aDogNjAwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQ3NXB4KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoNjd2dyAtIDI1cHgpO1xuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XG4gICAgbWluLWhlaWdodDogbWluLWNvbnRlbnQ7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgei1pbmRleDogOTAwO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cbi5oaWRlLW91dGxpbmUge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLnRpZ2h0IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG59XG4jbWFzdGVyLXBhbmVsIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5yb3cge1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4vLyBCdXR0b24gc3R5bGluZzpcbmJ1dHRvbjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cbi5idG4tcHJpbWFyeS1ibHVlIHtcbiAgICBtYXJnaW46IDVweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNzc4QUQ1O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc4QUQ1O1xuICAgIHBhZGRpbmc6IDNweCA2cHggM3B4IDZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bi1wcmltYXJ5LWJsdWU6aG92ZXIsIC5idG4tcHJpbWFyeS1ncmVlbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcbn1cbi5idG4tcHJpbWFyeS1ncmVlbiB7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzVBQTI2MztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVBQTI2MztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogM3B4IDZweCAzcHggNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMTJweDtcbn1cbi5idG4tc2V0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYWRkRmVlZGJhY2tCdG4ge1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4vLyBJbnB1dCBzdHlsaW5nOlxuLmNzdi10YWJsZS1oZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMjI1O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNTJweDtcbn1cbi5pbnB1dC1ib3gge1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzIxMjIyNTtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMjI1O1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiAjNjg2QTcwO1xufVxuLmlucHV0LWJveDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmZmO1xufVxuI2ZlZWRiYWNrIHtcbiAgICB3aWR0aDogMjh2dztcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgIHdpZHRoOiBjYWxjKDMzdncgLSAxODBweCk7XG59XG4jZGVkdWN0aW9uIHtcbiAgICB3aWR0aDogNjBweDtcbn1cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB6LWluZGV4OiA4MDA7XG59XG4jdGl0bGUsICNtYXgtcHRzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbiNtYXgtcHRzIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4jdHJhc2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTZBNjI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNFQTZBNjI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDI3cHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbiN0cmFzaDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xufVxuI3RyYXNoLWhlYWRlciB7XG4gICAgb3BhY2l0eTogMDtcbn1cbi5zdGlja3kge1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xufVxuXG4vLyBHZW5lcmFsIHN0eWxpbmdcbmxhYmVsIHtcbiAgICBjb2xvcjogI2RkZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8vIHN0eWxpbmcgZmVlZGJhY2sgc3RhdGlzdGljc1xuLmZlZWRiYWNrLXN0YXRzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mZWVkYmFjay1jb3VudCB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ3JhZGUtc3RhdHMge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqIFN0eWxpbmcgZm9yIENTViBzaWRlXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLm91dGVyLW5vd3JhcCB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmlubmVyLW5vd3JhcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5idXR0b246Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbiNjc3ZJbXBvcnRCdG4sICNqc29uSW1wb3J0QnRuIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmlucHV0W3R5cGU9ZmlsZV06OmZpbGUtc2VsZWN0b3ItYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uY3N2VGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBjc3YgdGFibGUgc3R5bGluZ1xuLmNzdlRhYmxlIHRoLCAuY3N2VGFibGUgdGQge1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5maWxlLXdhcm5pbmcge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY3N2VGFibGUgdHI6bnRoLWNoaWxkKDJuKSB7XG4gICAgYmFja2dyb3VuZDogIzI1MjcyYTtcbn1cblxuLmNzdlRhYmxlIHRyLnNlbGVjdGVkIHtcbiAgICBjb2xvcjogIzMzY2MzMztcbiAgICBiYWNrZ3JvdW5kOiAjNjI2MzY2XG59XG5cbi5jc3ZUYWJsZSB0Ym9keSA+IHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjNDE0MjQ1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNzdlRhYmxlIHRoZWFkIHtcbiAgICBjb2xvcjogI0JCQjtcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMjI1O1xufVxuXG4uY3N2VGFibGUgdGFibGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jc3ZUYWJsZSB0Ym9keSA+IHRyOmZvY3VzLCAuY3N2VGFibGUgdGJvZHkgPiB0cjphY3RpdmUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3NzhBRDU7XG59XG5cbi5uYXJyb3cge1xuICAgIG1heC13aWR0aDogbWluLWNvbnRlbnQgKyAzcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi53aWRlIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG59XG4jZmVlZGJhY2stY29sdW1uIHtcbiAgICBtaW4td2lkdGg6IDE5MHB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cbiNmZWVkYmFjay10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4vLyBIaXN0b2dyYW0gc3R5bGluZ1xuYXB4LWNoYXJ0IHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5kZW1vLXRleHQge1xuICAgIC8vIHB1dCB0aGUgdGV4dCBvbiB0aGUgcmlnaHQgZWRnZSBvZiB0aGUgc2NyZWVuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiA1JTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      5041);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      5835);
      /* harmony import */


      var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-csv-parser */
      4885);
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-apexcharts */
      4256);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__.NgxCsvParserModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__.NgxCsvParserModule, ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__.NgApexchartsModule]
        });
      })();
      /***/

    },

    /***/
    7518:
    /*!*************************************!*\
      !*** ./src/app/feedback.service.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FeedbackService": function FeedbackService() {
          return (
            /* binding */
            _FeedbackService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      5917);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! dayjs */
      8873);
      /* harmony import */


      var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-csv-parser */
      4885);

      var _FeedbackService = /*#__PURE__*/function () {
        function _FeedbackService(ngxCsvParser) {
          _classCallCheck(this, _FeedbackService);

          this.ngxCsvParser = ngxCsvParser;
          this.students = [];
          this.feedbacks = [];
          this.feedbackCounts = [];
          this.assignmentNameFromJSONFile = '';
        }

        _createClass(_FeedbackService, [{
          key: "parseFile",
          value: function parseFile(fileName) {
            // Check for empty CSV file
            if (fileName[0]["size"] > 3) {
              this.correctFile = true;
            } else {
              this.correctFile = false;
              this.clearStudents();
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_1__.of)("File is empty");
            } // reference: https://www.npmjs.com/package/ngx-csv-parser
            // Parse the file you want to select for the operation along with the configuration


            var response = this.ngxCsvParser.parse(fileName[0], {
              header: true,
              delimiter: ','
            });
            return response;
          }
        }, {
          key: "parseCSV",
          value: function parseCSV(csvRecords) {
            // console.log('Parser Result', result);
            // check headers if correct CSV file
            if (csvRecords[0] === undefined || csvRecords[0]["Identifier"] === undefined || csvRecords[0]["Email address"] === undefined || csvRecords[0]["Feedback comments"] === undefined || csvRecords[0]["Full name"] === undefined || csvRecords[0]["Grade"] === undefined || csvRecords[0]["Grade can be changed"] === undefined || csvRecords[0]["Identifier"] === undefined || csvRecords[0]["Last modified (grade)"] === undefined || csvRecords[0]["Last modified (submission)"] === undefined || csvRecords[0]["Maximum Grade"] === undefined || csvRecords[0]["Online text"] === undefined || csvRecords[0]["Status"] === undefined) {
              console.log("Wrong CSV File!");
              this.correctFile = false;
              this.clearStudents();
            } else {
              console.log("Correct CSV File!");
              this.correctFile = true;
              this.createStudentsFromCsv(csvRecords);
            }
          } // Make a download button

        }, {
          key: "exportCSV",
          value: function exportCSV(assignmentName) {
            // Remove forbidden characters from assignment title
            var title = this.cleanUpAssignmentTitle(assignmentName); // Get current date and time

            var currentDateTime = dayjs__WEBPACK_IMPORTED_MODULE_0__().format('_YYYY-MM-DD'); // Pass string into handle for data-table

            var my_data_string = this.buildCSV(this.students); // Create an href element in the DOM

            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a); // Create object of type csv text file

            var blob = new Blob([my_data_string], {
              type: 'text/csv'
            });
            var url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = title + currentDateTime + '.csv';
            a.click();
          } // This manually constructs our CSV file string

        }, {
          key: "buildCSV",
          value: function buildCSV(students) {
            // console.log(JSON.stringify(students, null, 2));
            var my_data = students;
            var csv_file = ''; // create header row

            var row = 'Identifier,Full name,Email address,Status,Grade,Maximum Grade,Grade can be changed,Last modified (submission),Online text,Last modified (grade),Feedback comments'; // Add row and newline + carriage-return

            csv_file += row + '\r\n'; // Build and add lines to csv_file

            for (var i = 0; i < my_data.length; i++) {
              var line = '';

              for (var index in my_data[i]) {
                if (line !== '') {
                  line += ','; // do comma-separation
                }

                if (index === 'gradeLastModified' || index === 'submissionLastModified') {
                  line += '"' + my_data[i][index] + '"';
                } else if (index == 'feedbackBoolean') {
                  var feedbackString = this.createCSVFeedbackString(my_data[i][index]); // wrap each field in double quotes

                  line += '"' + feedbackString + '"'; // console.log("Return from function:" + my_data[i][index])
                } else {
                  // console.log('mydata[i][index] = ', my_data[i][index])
                  line += my_data[i][index];
                }
              }

              csv_file += line + '\r\n';
            } // End of file


            return csv_file;
          }
        }, {
          key: "createCSVFeedbackString",
          value: function createCSVFeedbackString(feedback) {
            var feedbackStringArray = [];

            for (var n = 0; n < this.feedbacks.length; n++) {
              if (feedback[n]) {
                // if the feedback string has a double quote in it, add an extra one.
                var res = this.feedbacks[n].feedback.replace(/"/g, '""');
                feedbackStringArray.push("-" + this.feedbacks[n].deduction + ": " + res);
              }
            }

            var feedbackString = feedbackStringArray.join('; ');
            return feedbackString;
          }
        }, {
          key: "createStudentsFromCsv",
          value: function createStudentsFromCsv(csvRecords) {
            // console.log(JSON.stringify(csvRecords, null, 2));
            // put csv-parser results into newStudent[]
            for (var i = 0; i < csvRecords.length; i++) {
              // initialize each student object
              var newStudent = {
                num: i,
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
                feedbackBoolean: new Array(this.feedbacks.length).fill(false)
              };
              this.students.push(newStudent);
            }

            this.maxScore = this.students[0].maxGrade;
          }
        }, {
          key: "clearStudents",
          value: function clearStudents() {
            this.students = [];
          }
        }, {
          key: "clearFeedbacks",
          value: function clearFeedbacks() {
            this.feedbacks = [];
            this.feedbackCounts = [];
          }
        }, {
          key: "cleanUpAssignmentTitle",
          value: function cleanUpAssignmentTitle(assignmentName) {
            // Remove forbidden characters from assignment title and replace spaces with underscores
            assignmentName = assignmentName.replace(/[#<>^\-~$%!&*,.;\\"?'\/{}:@+`|=\[\]]/g, '');
            assignmentName = assignmentName.replace(/ /g, '_');

            if (assignmentName === '') {
              assignmentName = "assignment";
            }

            return assignmentName;
          }
        }, {
          key: "exportDataAsJson",
          value: function exportDataAsJson(assignmentName) {
            var wholeThing = {
              "students": this.students,
              "feedbacks": this.feedbacks,
              "assignmentName": assignmentName
            };
            var jsonWholeThing = JSON.stringify(wholeThing);
            var title = this.cleanUpAssignmentTitle(assignmentName) + ".json";
            var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(wholeThing)); // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser

            var a = document.createElement("a");
            a.setAttribute('style', 'display:none;');
            document.body.appendChild(a);
            a.setAttribute("href", dataStr);
            a.setAttribute("download", title);
            a.click();
            a.remove();
          }
        }, {
          key: "importDataAsJson",
          value: function importDataAsJson(files) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              var file = files[0];
              var fr = new FileReader();

              fr.onload = function (e) {
                var lines = e.target.result;
                var res = JSON.parse(lines); // console.log('got json file parsed: res = ', JSON.stringify(res, null, 2));

                _this4.students = res["students"];
                _this4.feedbacks = res["feedbacks"];
                _this4.assignmentNameFromJSONFile = res["assignmentName"];
                _this4.maxScore = _this4.students[0].maxGrade;
                _this4.correctFile = true;
                resolve();
              };

              fr.readAsText(file);
            });
          }
        }, {
          key: "getStudents",
          value: function getStudents() {
            return this.students;
          }
        }, {
          key: "getFeedbacks",
          value: function getFeedbacks() {
            return this.feedbacks;
          }
        }, {
          key: "getAssignmentName",
          value: function getAssignmentName() {
            return this.assignmentNameFromJSONFile;
          }
        }, {
          key: "feedbackCreate",
          value: function feedbackCreate(feedbackString, points) {
            var newFeedback = {
              feedback: feedbackString,
              deduction: points
            };
            this.feedbacks.push(newFeedback); // add this feedback to the student feedback array as false

            for (var i = 0; i < this.students.length; i++) {
              this.students[i].feedbackBoolean.push(false);
            }
          }
        }, {
          key: "feedbackRead",
          value: function feedbackRead() {
            return this.feedbacks;
          }
        }, {
          key: "feedbackStringUpdate",
          value: function feedbackStringUpdate(index, feedbackString) {
            // update values in feedback array
            this.feedbacks[index].feedback = feedbackString;
          }
        }, {
          key: "feedbackDeductionUpdate",
          value: function feedbackDeductionUpdate(index, points) {
            this.feedbacks[index].deduction = points;

            for (var i = 0; i < this.students.length; i++) {
              if (this.students[i].feedbackBoolean[index]) {
                this.gradeUpdate(i);
              }
            }
          }
        }, {
          key: "feedbackDelete",
          value: function feedbackDelete(index) {
            // let response = window.confirm("Deleting this option will remove it universally. Are you sure?");
            // if (response) {
            // delete feedback in students' boolean feedback arrays
            for (var i = 0; i < this.students.length; i++) {
              if (this.students[i].feedbackBoolean[index]) {
                // add deduction value to student grade before delete
                var newGrade = parseFloat(this.students[i].grade) + this.feedbacks[index].deduction;
                this.students[i].grade = newGrade.toString();
              }

              this.students[i].feedbackBoolean.splice(index, 1);
            } // remove 1 element at index


            this.feedbacks.splice(index, 1); // }
          }
        }, {
          key: "feedbackApply",
          value: function feedbackApply(feedbackIndex, studentIndex) {
            this.students[studentIndex].feedbackBoolean[feedbackIndex] = true; // update grade

            this.gradeUpdate(studentIndex);
          }
        }, {
          key: "feedbackUnapply",
          value: function feedbackUnapply(feedbackIndex, studentIndex) {
            this.students[studentIndex].feedbackBoolean[feedbackIndex] = false;
            this.gradeUpdate(studentIndex);
          }
        }, {
          key: "gradeUpdate",
          value: function gradeUpdate(studentIndex) {
            var totalDeductions = 0;

            for (var n = 0; n < this.feedbacks.length; n++) {
              if (this.students[studentIndex].feedbackBoolean[n]) {
                totalDeductions = totalDeductions + this.feedbacks[n].deduction;
              }
            }

            var newGrade = parseFloat(this.maxScore) - totalDeductions; // if score is not an int round to 1 decimal place

            var result = newGrade - Math.floor(newGrade) !== 0;

            if (result) {
              newGrade = parseFloat(newGrade.toFixed(1));
            }

            this.students[studentIndex].grade = newGrade.toString();
          }
        }, {
          key: "perfectGrade",
          value: function perfectGrade(studentIndex) {
            this.students[studentIndex].grade = this.maxScore; // set all boolean feedback to false

            for (var n = 0; n < this.feedbacks.length; n++) {
              this.students[studentIndex].feedbackBoolean[n] = false;
            }
          }
        }, {
          key: "clearGrade",
          value: function clearGrade(studentIndex) {
            this.students[studentIndex].grade = ""; // set all boolean feedback to false

            for (var n = 0; n < this.feedbacks.length; n++) {
              this.students[studentIndex].feedbackBoolean[n] = false;
            }
          } // Return an array of arrays of strings -- outer array is per student, inner array is feedback strings
          // for that student.

        }, {
          key: "getFeedbackStrings",
          value: function getFeedbackStrings() {
            var res = [];

            for (var i = 0; i < this.students.length; i++) {
              var strs = [];

              for (var n = 0; n < this.feedbacks.length; n++) {
                if (this.students[i].feedbackBoolean[n]) {
                  strs.push("-" + this.feedbacks[n].deduction + ": " + this.feedbacks[n].feedback);
                }
              } // join all deduction strings together with semi-colon separator.


              res.push(strs.join('; '));
            }

            return res;
          }
        }, {
          key: "updateChartData",
          value: function updateChartData() {
            var chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // loop through each student to put data into histogram

            for (var i = 0; i < this.students.length; i++) {
              if (this.students[i].grade != "") {
                var numGrade = Math.round(parseFloat(this.students[i].grade) / parseFloat(this.maxScore) * 100); // console.log(parseFloat(this.maxScore));
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
        }, {
          key: "updateFeedbackCount",
          value: function updateFeedbackCount() {
            // count the number of times each feedback is applied
            // the deduction value is the count vlaue
            this.feedbackCounts = [];

            for (var n = 0; n < this.feedbacks.length; n++) {
              if (this.feedbacks[n].feedback != "") {
                var newFeedback = {
                  feedback: this.feedbacks[n].feedback,
                  deduction: 0
                };
                this.feedbackCounts.push(newFeedback);
              }

              for (var i = 0; i < this.students.length; i++) {
                if (this.students[i].feedbackBoolean[n]) {
                  this.feedbackCounts[n].deduction += 1;
                }
              }
            }

            return this.feedbackCounts;
          }
        }, {
          key: "updateAverageStat",
          value: function updateAverageStat() {
            var avg = 0;
            var count = 0;

            for (var i = 0; i < this.students.length; i++) {
              if (this.students[i].grade != "") {
                var numGrade = Math.round(parseFloat(this.students[i].grade) / parseFloat(this.maxScore) * 100);
                avg += numGrade;
                count += 1;
              }
            }

            return avg / count;
          }
        }, {
          key: "updateMinMaxStats",
          value: function updateMinMaxStats() {
            var min = 0;
            var max = 0;
            var arrayGrades = [];

            for (var i = 0; i < this.students.length; i++) {
              if (this.students[i].grade != "") {
                var numGrade = Math.round(parseFloat(this.students[i].grade) / parseFloat(this.maxScore) * 100);
                arrayGrades.push(numGrade);
              }
            }

            min = Math.min.apply(Math, arrayGrades);
            max = Math.max.apply(Math, arrayGrades);
            return [min, max];
          }
        }]);

        return _FeedbackService;
      }();

      _FeedbackService.ɵfac = function FeedbackService_Factory(t) {
        return new (t || _FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_3__.NgxCsvParser));
      };

      _FeedbackService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _FeedbackService,
        factory: _FeedbackService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    2340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
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

      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      6747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      2340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map