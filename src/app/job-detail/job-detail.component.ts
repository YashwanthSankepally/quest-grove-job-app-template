import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  job: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.job = navigation?.extras?.state?.['data'];
  }

  ngOnInit(): void {}

  apply(job:any) {
    job.isApplied = true;
  }

}
