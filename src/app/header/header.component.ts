import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home']);
  }

  jobs() {
    this.router.navigate(['jobs']);
  }

  courses() {
    this.router.navigate(['courses']);
  }

  appliedJobs() {
    this.router.navigate(['applied-jobs']);
  }

  editProfile() {
    this.router.navigate(['edit-profile']);
  }

  settings() {
    this.router.navigate(['settings']);
  }

  feedback() {
    this.router.navigate(['feedback']);
  }

}
