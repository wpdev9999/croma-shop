import { Component, ElementRef, OnInit  } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private elementRef: ElementRef, private toastr: ToastrService) {}

  toggleRightPanel() {
    const container = this.elementRef.nativeElement.querySelector('#container');
    container.classList.toggle('right-panel-active');
  }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });

  loginFormSubmit() {
    if (this.loginForm.valid) {
      this.toastr.success('Login Successfull!');
    }
    else{
      this.toastr.error('Something went wrong!');
    }
  }

  get l(): any { return this.loginForm.controls; }
  
  

  newUserForm: FormGroup = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
  });


  get r(): any { return this.newUserForm.controls; }
  
  signupFormSubmit() {
    if (this.newUserForm.valid) {
      this.toastr.success('Registration Successfull!');
    }
    else{
      this.toastr.error('Something went wrong!');
    }
  }

}
