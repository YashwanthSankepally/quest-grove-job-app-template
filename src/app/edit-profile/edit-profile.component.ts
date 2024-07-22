import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  editProfileForm!: FormGroup;
  username: string = '';

  constructor(private fb: FormBuilder, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.editProfileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.sharedService.currentUsername.subscribe((username: string) => {
      this.username = username;
    });
  }

  onSubmit() {
    if (this.editProfileForm.valid) {
      this.sharedService.changeUsername(this.editProfileForm.value.username);
    }
  }
}
