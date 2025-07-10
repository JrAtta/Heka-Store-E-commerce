import { Component, Inject, inject, Injectable, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService,  } from '../../core/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgIf, NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule ,NgIf,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnDestroy {
  auth = inject(AuthService)
  _router = inject(Router)
  isLoading!:boolean;
  subscribtion:Subscription[] = [];
  messageSuccess:string = '';
  messageError:string = '';
  registerForm!:FormGroup;
  constructor(private _FormBuilder:FormBuilder){
    this.registerForm = this._FormBuilder.group({
      name:[null,[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]],
      email:[null,[Validators.required , Validators.email]],
      phoneNumber:[null,[Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/)]],
      password:[null,[Validators.required, Validators.minLength(6) , ]],
      rePassword:[null,[Validators.required]],
    },
  {validators : this.passwordMatchValidator });
  }

  passwordMatchValidator( g : AbstractControl){
    const password = g.get('password')?.value;
    const rePassword = g.get('rePassword')?.value;
    return password !== rePassword ? { 'mismatch' : true }: null;
  }

  submitForm(){
    this.isLoading = true;
    if(this.registerForm.valid){
     let registerSub = this.auth.setSignUpForm(this.registerForm.value).subscribe({
        next:(res:any)=>{
         if(res.message === 'success'){
          this.messageError = '';
          this.isLoading = false;
           this.messageSuccess = res.message;
           setTimeout(()=>{
            this. _router.navigate(['login']);
           },1000)
         }

        },
        error:(err:HttpErrorResponse)=>{
          this.messageSuccess = '';
          this.messageError = err.error.message
          this.isLoading = false;

        },
        complete:()=> {
          this.isLoading = false;

        },
      });

      this.subscribtion.push(registerSub);
    }
    else{
    this.isLoading = false;
    this.registerForm.markAllAsTouched();
    this.registerForm.setErrors({'mismatch' : true}); // should be object

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
