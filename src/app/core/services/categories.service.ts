import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environments } from '../Environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _HttpClient:HttpClient) { }

  getAllCategories():Observable<any>{
    return this._HttpClient.get(`${Environments.baseUrl}/api/v1/categories`)
  }
  getSpecificCategory(id:string):Observable<any>{
    return this._HttpClient.get( `${Environments.baseUrl}/api/v1/categories/${id} `)
  }
}
