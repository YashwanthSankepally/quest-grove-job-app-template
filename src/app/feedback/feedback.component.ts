import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      rating: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.pattern('^[0-9]{10}$')], // Example pattern for 10-digit phone number
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Form submitted successfully!');
      // Perform additional actions like sending data to server
    } else {
      console.error('Form has validation errors.');
    }
  }
}
