import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent implements OnInit {
  job: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe((params) => {
      this.job = {
        companyName: params['companyName'],
        role: params['role'],
        skills: JSON.parse(params['skills']),
        Salary: params['Salary'],
        Experience: params['Experience'],
        aboutCompany: params['aboutCompany'],
        aboutJobRole: params['aboutJobRole'],
        City: params['City'],
        Address: params['Address'],
        isApplied: params['isApplied'] === 'true',
        SalaryInNumbers: +params['SalaryInNumbers'],
        displayJobCard: params['displayJobCard'] === 'true',
        category: params['category'],
        favorite: params['favorite'] === 'true',
      };
    });
  }

  ngOnInit(): void {}

  apply(job: any) {
    job.isApplied = true;
  }

  back() {
    this.router.navigate(['jobs']);
  }
}
