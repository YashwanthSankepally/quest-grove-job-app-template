import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  isLogin: boolean = true;
  showLoginPassword: boolean = false;
  showRegisterPassword: boolean = false;

  constructor(private fb: FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });

    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  toggleLoginPasswordVisibility() {
    this.showLoginPassword = !this.showLoginPassword;
  }

  toggleRegisterPasswordVisibility() {
    this.showRegisterPassword = !this.showRegisterPassword;
  }

  onSubmit() {
    if (this.isLogin) {
      // Handle login logic
      if (this.loginForm.valid) {
        console.log('Login Form Submitted', this.loginForm.value);
        this.router.navigate(['home'])
      }

    } else {
      // Handle register logic
      if (this.registerForm.valid) {
        console.log('Register Form Submitted', this.registerForm.value);
        this.router.navigate(['home'])
      }

    }
  }
  
}
