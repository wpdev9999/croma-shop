import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private elementRef: ElementRef, private toast: ToastrService, private router: Router, private Auth: AuthService) { }

  toggleRightPanel() {
    const container = this.elementRef.nativeElement.querySelector('#container');
    container.classList.toggle('right-panel-active');
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('john@mail.com', [Validators.required]),
    password: new FormControl('changeme', [Validators.required]),
  });

  loginFormSubmit() {
    if (this.loginForm.valid) {
      this.Auth.checkUser(this.loginForm.value.email, this.loginForm.value.password).subscribe((res) => {
        if (res.access_token) {
          this.toast.success('Login Successfull!');

          if (typeof localStorage !== 'undefined') {
            localStorage.setItem('accessToken',res.access_token);
            localStorage.setItem('refresh_token',res.refresh_token);
            this.router.navigate(['admin']);
          }
        }
      }, (error) => {
        this.toast.error(error.error.message);

      });
    }
  }

  get l(): any { return this.loginForm.controls; }



  newUserForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    password: new FormControl('', [Validators.required]),
  });


  get r(): any { return this.newUserForm.controls; }

  signupFormSubmit() {
    if (this.newUserForm.valid) {
      this.toast.success('Registration Successfull!');
    }
    else {
      this.toast.error('Something went wrong!');
    }
  }

}




