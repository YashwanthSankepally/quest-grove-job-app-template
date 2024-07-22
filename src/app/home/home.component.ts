import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displayJobs: boolean = true;
  displayCourses: boolean = false;

  constructor() {}

  ngOnInit() {
    const hamBurger = document.querySelector('.toggle-btn') as HTMLElement;

    if (hamBurger) {
      hamBurger.addEventListener('click', () => {
        const sidebar = document.querySelector('#sidebar') as HTMLElement;
        if (sidebar) {
          sidebar.classList.toggle('expand');
        }
      });
    }
  }

  displayAppJobs() {
    this.displayJobs = true;
    this.displayCourses = false;
  }

  displayAppCourses() {
    this.displayCourses = true;
    this.displayJobs = false;
  }
}
