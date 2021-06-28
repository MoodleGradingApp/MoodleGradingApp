import { Component, OnInit } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-csv-parser',
  templateUrl: './csv-parser.component.html',
  styleUrls: ['./csv-parser.component.scss']
})
export class CsvParserComponent implements OnInit {

  correctFile: boolean;
  emptyFile: boolean;

  csvRecords: any[] = [];
  usernames: any[] = [];
  header = true;

  constructor(private ngxCsvParser: NgxCsvParser) {
  }

  @ViewChild('fileImportInput', { static: false }) fileImportInput: any;

  // Your applications input change listener for the CSV File
  fileChangeListener($event: any): void {

    // Select the files from the event
    const files = $event.srcElement.files;
    
    console.log("File size: ", files[0]["size"]);

    // Check for empty CSV file
    if (files[0]["size"] > 3) { 
      this.emptyFile = false;
    } else {
      this.emptyFile = true;
      this.correctFile =  false;
      console.log("File is empty!")
      return;
    }

    // reference: https://www.npmjs.com/package/ngx-csv-parser
    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
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

      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
  }

  ngOnInit(): void {
  }

}
