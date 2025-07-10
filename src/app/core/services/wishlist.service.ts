import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Environments } from '../Environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { Iwishlist } from '../interfaces/iwishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  header:any;
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  constructor(private _HttpClient:HttpClient) {
   if (isPlatformBrowser(this._PLATFORM_ID) && localStorage.getItem("userToken")) {
      this.header = { token: localStorage.getItem('userToken') };
    }
   }


   private wishlistCount = new BehaviorSubject<number>(0)
   public wishlistCount$  = this.wishlistCount.asObservable();

   updateWishlistCountFromResponse(res:any):void{   // هنا الباك اند بيرجه ارراي مش قيمه
    if(res && Array.isArray(res.data)){
    this.wishlistCount.next(res.data.length);
  }
   }

  addProductToWishlist(id:string):Observable<any>{
    return this._HttpClient.post(`${Environments.baseUrl}/api/v1/wishlist`,{"productId":id},
      {
        headers:this.header,

      }).pipe(
        tap( (res) => this.updateWishlistCountFromResponse(res) )
      );
  }


  removeProductFromWishlist(id:string):Observable<any>{
    return this._HttpClient.delete(`${Environments.baseUrl}/api/v1/wishlist/${id}`,
      {
        headers: this.header
      }

    ).pipe(
      tap( (res)=> this.updateWishlistCountFromResponse(res))
    )
  }

  getLoggedUserWIshlist():Observable<any>{
    return this._HttpClient.get(`${Environments.baseUrl}/api/v1/wishlist`,
      {
        headers: this.header
      }
    )
  }
}
