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

  // constructor() { }

  // reference: https://www.npmjs.com/package/ngx-csv-parser
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

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe((result: Array<any>) => {

        console.log('Parser Result', result);
        this.csvRecords = result;

        // return only Calvin username, get rid of '@students.calvin.edu'
        console.log(this.csvRecords.length);
        for (let i = 0; i < this.csvRecords.length; i++) {
          this.csvRecords[i]["Email address"] = this.csvRecords[i]["Email address"].split("@", 1);
        }

      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });

  }

  ngOnInit(): void {
  }

}
