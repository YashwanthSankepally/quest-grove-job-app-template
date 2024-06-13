import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  displayJobs!: boolean;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.displayJobs$.subscribe(value => {
      this.displayJobs = value;
    });
  }

}
