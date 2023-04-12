import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackBarService, SnackBarType } from '../components/app-snackbar/snackbar/snackbar.service';
import { UserCredentials } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isLoading = false;
  loginForm!: FormGroup
  requestParam!: UserCredentials;

  constructor(private authService: AuthService, private router: Router, private snackBar: SnackBarService, private formBuilder: FormBuilder) { }

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.loginForm.controls['username'].value || !this.loginForm.controls['password'].value) {
      return;
    }

    this.isLoading = true;
    this.requestParam = {... this.loginForm.value}
    this.authService.login(this.requestParam).subscribe(
      (response) => {
        this.isLoading = false;
        if (response.is_success) {
          localStorage.setItem('token', response.data.token);
          this.router.navigate(['/movies-list']);
          this.snackBar.open('Login Successful',SnackBarType.Success,'close')
        } else {
          this.snackBar.open(response.error.message, SnackBarType.Error, 'close');
        }
      },
      (error) => {
        this.isLoading = false;
        this.snackBar.open('Failed to login. Please try again later.', SnackBarType.Error,'Close');
      }
    );
  }
}
