import { AuthService } from './../../core/services/auth.service';
import { HttpErrorResponse} from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, inject, OnDestroy } from '@angular/core';
import {  FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { validateHeaderName } from 'http';
import { loadZone } from 'zone.js/lib/zone';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent implements OnDestroy{
  isLoading!:boolean;
  formNum :number = 1; // to show & hide forms
  messageSuccess:string ='';
  messageError:string ='';
  subscription:Subscription[] = [];
  private _AuthService = inject(AuthService);
  private _Router = inject(Router);
  forgetPasswordForm!:FormGroup;
  verifyResetCodeForm!:FormGroup;
  resetPasswordForm!:FormGroup;
  constructor(private _FormBuilder:FormBuilder){
    //forgetPasswordForm >>
    this.forgetPasswordForm = this._FormBuilder.group({
      email:[null,[Validators.email,Validators.required]]
    });

    //verifyResetCodeForm >>
    this.verifyResetCodeForm = this._FormBuilder.group({
      resetCode : [null,[Validators.required,Validators.pattern(/^[0-9]{1,6}$/)]]
    });

    //resetPasswordForm >>
    this.resetPasswordForm = this._FormBuilder.group({
      email:[null,[Validators.email,Validators.required]],
      newPassword:[null,[Validators.required,Validators.minLength(6)]]
    })

  }

  submitForgetPasswordForm(){
    this.isLoading = true;
  if(this.forgetPasswordForm.valid){
    let emailValue = this.forgetPasswordForm.get('email')?.value;
    // this.resetPasswordForm.get('email')?.patchValue(emailValue); // to get the value directly
    this.resetPasswordForm.get('email')?.patchValue(emailValue); // to get the value directly

  let sub1 =  this._AuthService.setForgetPasswordForm(this.forgetPasswordForm.value).subscribe({
      next : (res:any)=>{
        if(res.statusMsg === 'success'){
          this.messageError = '';
          this.isLoading = false ;
          this.messageSuccess = res.message ;
          setTimeout(() => {
            this.messageError = this.messageSuccess = '',

            this.formNum = 2;  // to go to next form

          }, 1000);
        }
      },
      error: (err:HttpErrorResponse)=>{
        this.messageSuccess = '';
        this.isLoading = false ;
        this.messageError = err.error.message ;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
    this.subscription.push(sub1);
  } else {
    this.isLoading =false ;
    this.forgetPasswordForm.markAllAsTouched();

  }
  }
  submitverifyResetCodeForm(){
    this.isLoading = true;
    if(this.verifyResetCodeForm.valid){
      let sub2 = this._AuthService.setVerifyResetCode(this.verifyResetCodeForm.value).subscribe({
        next: (res:any)=>{
          if(res.status === "Success"){
            this.messageError = ''
            this.isLoading = false;
            this.messageSuccess = res.status;
            setTimeout(() => {
              this.messageError = this.messageSuccess = '',
              this.formNum = 3;  // to go to next form

            }, 1000);
          }
        },
        error: (err:HttpErrorResponse)=>{
          this.messageSuccess = ''
          this.isLoading = false;
          this.messageError = err.error.message;
        },
        complete: ()=>{
          this.isLoading = false;
        },
      });
      this.subscription.push(sub2);
    } else{
      this.isLoading = false ;
      this.verifyResetCodeForm.markAllAsTouched();
    }
  }
  submitresetPasswordForm(){
    this.isLoading = true;
    if(this.resetPasswordForm.valid){
     let sub3 =  this._AuthService.setResetPassword(this.resetPasswordForm.value).subscribe({
        next: (res:any)=>{
          this.messageError = '';
          this.messageSuccess = 'Congrats, Welcome Back';

          setTimeout(() => {
            this.messageError = this.messageSuccess = '',
                      localStorage.setItem('userToken',res.token);
                      this._AuthService.saveUserData();
                      this._Router.navigate(['/home']);
          }, 1000);
        },
        error: (err:HttpErrorResponse)=>{
          this.messageSuccess = '';
          this.messageError = err.error.message;
        },
        complete: ()=>{
          this.isLoading = false;
        },
      });
      this.subscription.push(sub3);
    }else{
      this.isLoading = false;
      this.resetPasswordForm.markAllAsTouched();

    }
  }
ngOnDestroy(): void {
  this.subscription.forEach((sub:Subscription)=>{
    if(sub){
      sub.unsubscribe();
    }
  })
}
}
