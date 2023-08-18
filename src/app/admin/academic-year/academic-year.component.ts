import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic-year',
  templateUrl: './academic-year.component.html',
  styleUrls: ['./academic-year.component.css']
})
export class AcademicYearComponent implements OnInit {

  AcademicYearId: number = 0;
  IsAddEdit: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  AddNew() {
    this.IsAddEdit = 1;
  }

}
