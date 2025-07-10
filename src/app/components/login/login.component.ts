import { Component, Inject, inject, Injectable, OnDestroy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgIf, NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnDestroy {
  auth = inject(AuthService);
  _router = inject(Router);
  subscribtion:Subscription[] = [];
  isLoading!: boolean;
  messageSuccess: string = '';
  messageError: string = '';
  loginForm!: FormGroup;
  constructor(private _FormBuilder: FormBuilder) {
    this.loginForm = this._FormBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    this.isLoading = true;
    if (this.loginForm.valid) {
    let loginSub =   this.auth.setLoginForm(this.loginForm.value).subscribe({
        next: (res: any) => {
          if (res.message === 'success') {
            this.messageError = '';
            this.isLoading = false;
            this.messageSuccess = res.message;
            setTimeout(() => {
              // 1- saved token
              localStorage.setItem('userToken', res.token);
              // 2- Decode token
              this.auth.saveUserData();
              // 3- navigate to home
              this._router.navigate(['/home']);
            }, 1000);
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);

          this.messageSuccess = '';
          this.messageError = err.error.message;
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
      this.subscribtion.push(loginSub);
    } else {
      this.isLoading = false;
      this.loginForm.markAllAsTouched();
    }
  }
  ngOnDestroy(): void {
    this.subscribtion?.forEach((sub:Subscription) =>{
      if(sub){
        sub.unsubscribe();
      }
    })
  }
}
