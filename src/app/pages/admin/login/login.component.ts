import { Component, ElementRef, OnInit  } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  constructor(private elementRef: ElementRef, private toastr: ToastrService) {}


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
  
  toggleRightPanel() {
    const container = this.elementRef.nativeElement.querySelector('#container');
    container.classList.toggle('right-panel-active');
  }
  

}
