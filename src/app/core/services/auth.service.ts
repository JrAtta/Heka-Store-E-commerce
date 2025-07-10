import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Environments } from '../Environments/environment';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  _Router = inject(Router);
  userToken:any = null;
  constructor(private _HttpClient:HttpClient) { }

  setSignUpForm(data:object):Observable<any>{
    return this._HttpClient.post(`${Environments.baseUrl}/api/v1/auth/signup`,data);
  }
  setLoginForm(data:object):Observable<any>{
    return this._HttpClient.post(`${Environments.baseUrl}/api/v1/auth/signin`,data);
  }
  setForgetPasswordForm(email:object):Observable<any>{
    return this._HttpClient.post(`${Environments.baseUrl}/api/v1/auth/forgotPasswords`,email)
  }
  setVerifyResetCode(resetCode:object):Observable<any>{
    return this._HttpClient.post(`${Environments.baseUrl}/api/v1/auth/verifyResetCode`,resetCode)
  }
  setResetPassword(data:object):Observable<any>{
    return this._HttpClient.put(`${Environments.baseUrl}/api/v1/auth/resetPassword`,data)
  }


  saveUserData():void{
    if(localStorage.getItem('userToken') !== null ){
      this.userToken = jwtDecode(localStorage.getItem('userToken')!);
    }
  }

  signOut() :void{
    localStorage.removeItem('userToken');
    this.userToken = null;
    this._Router.navigate(['/login'])
  }
}
