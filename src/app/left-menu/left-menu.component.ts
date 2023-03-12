import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  RedirectToDashboard(): void {
    this.router.navigate(['dashboard']);
  }
  RedirectToStudent(): void {
    this.router.navigate(['student']);
  }
  RedirectToTeacher(): void {
    this.router.navigate(['teacher']);
  }

  RedirectToAcademic(): void {
    this.router.navigate(['academic']);
  }

  RedirectToClass(): void {
    this.router.navigate(['class']);
  }

}
