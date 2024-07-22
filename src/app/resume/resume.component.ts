import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  resumeForm: FormGroup;
  values: string[] = [];
  languageValues: string[] = [];
  text: string = '';
  isFresher: boolean = true;

  constructor(private fb: FormBuilder) {
    this.resumeForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      linkedin: ['', Validators.required],
      address: ['', Validators.required],
      skills: ['', Validators.required],
      languages: ['', Validators.required],
      profileSummary: ['', Validators.required],
      education: this.fb.group({
        graduation: this.fb.group({
          institution: ['', Validators.required],
          yearOfPassing: ['', Validators.required],
          percentage: ['', Validators.required],
        }),
        class12: this.fb.group({
          institution: ['', Validators.required],
          yearOfPassing: ['', Validators.required],
          percentage: ['', Validators.required],
        }),
        class10: this.fb.group({
          institution: ['', Validators.required],
          yearOfPassing: ['', Validators.required],
          percentage: ['', Validators.required],
        }),
      }),
      projects: ['', Validators.required],
      certificates: ['', Validators.required],
      companies: this.fb.array([]),
      pastSalary: [''],
    });
  }

  ngOnInit(): void {}

  toggleExperience(isFresher: boolean): void {
    this.isFresher = isFresher;
  }

  save(): void {
    if (this.resumeForm.valid) {
      localStorage.setItem('resumeData', JSON.stringify(this.resumeForm.value));
      alert('Data saved successfully');
    } else {
      this.resumeForm.markAllAsTouched();
      alert('Please fill all required fields');
    }
  }

  loadSavedData(): void {
    const savedData = localStorage.getItem('resumeData');
    if (savedData) {
      this.resumeForm.setValue(JSON.parse(savedData));
    }
  }

  onDownload(): void {
    alert('Work in progress!');
    if (this.resumeForm.invalid) {
      this.resumeForm.markAllAsTouched();
      return;
    }
    // Code to generate and download PDF
  }
}
