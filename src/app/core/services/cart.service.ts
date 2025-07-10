import { HttpClient } from '@angular/common/http';
import { Inject,  Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Environments } from '../Environments/environment';
import { isPlatformBrowser } from '@angular/common';
import { Icart } from '../interfaces/icart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
   header: any;
  private cartItemCount = new BehaviorSubject<number>(0);
  public cartItemCount$ = this.cartItemCount.asObservable();

  private cartdata = new BehaviorSubject<any>([]);
  public cartData$ = this.cartdata.asObservable();
 
  constructor(
    private _HttpClient: HttpClient,
    @Inject(PLATFORM_ID) private _PLATFORM_ID: any
  ) {
    if (isPlatformBrowser(this._PLATFORM_ID) && localStorage.getItem("userToken")) {
      this.header = { token: localStorage.getItem('userToken') };
    }
  }

  private updateCartCountFromResponse(res: any): void {
    if (res && res.numOfCartItems != null) {
      this.cartItemCount.next(res.numOfCartItems);
    }
  }

   updateCartData(res:any[]){
      this.cartdata.next(res)
  }

  addProductToCart(id: string): Observable<any> {
    return this._HttpClient.post(`${Environments.baseUrl}/api/v1/cart`, { "productId": id }, { headers: this.header })
      .pipe(
        tap((res) => {
          this.updateCartCountFromResponse(res);
          this.getLoggedCart().subscribe(cart =>{
            this.cartdata.next(cart.data)
          })

        })
      );
  }

  updateCartProductQuantity(id: string, count: number): Observable<any> {
    return this._HttpClient.put(`${Environments.baseUrl}/api/v1/cart/${id}`, { 'count': count }, { headers: this.header })
      .pipe(
        tap((res) => this.updateCartCountFromResponse(res)) // ✅ نحدث count بعد التحديث
      );
  }

  getLoggedCart(): Observable<any> {
    return this._HttpClient.get(`${Environments.baseUrl}/api/v1/cart`, { headers: this.header })
      .pipe(
        tap((res) =>{
           this.updateCartCountFromResponse(res);
        })
      );
  }

  removeSpeceficCartItme(id: string): Observable<any> {
    return this._HttpClient.delete(`${Environments.baseUrl}/api/v1/cart/${id}`, { headers: this.header })
      .pipe(
        tap((res) => this.updateCartCountFromResponse(res))
      );
  }

  clearUserCart(): Observable<any> {
    return this._HttpClient.delete(`${Environments.baseUrl}/api/v1/cart`, { headers: this.header })
      .pipe(
        tap((res) => this.updateCartCountFromResponse(res))
      );
  }

  // تستخدمها لما تفتح التطبيق لأول مرة وعايز تجيب العدد  بدل مستدعي الداله  هناك ف الكومبوننت
  fetchCartCount(): void {
    this.getLoggedCart().subscribe(); // فقط عشان يحدث الـ BehaviorSubject
  }
}
