import { environment } from './../../../../node_modules/ngx-toaster/demo/src/environments/environment.prod';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Environments } from '../Environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private readonly _PLATFORM_ID = inject(PLATFORM_ID);
  header: any = {};
  constructor(private _HttpClient: HttpClient) {
    if (
      isPlatformBrowser(this._PLATFORM_ID) &&
      localStorage.getItem('userToken')
    ) {
      this.header = {
        token: localStorage.getItem('userToken'),
      };
    }
  }

  creatCashOrder(data: object, id: string): Observable<any> {
    return this._HttpClient.post(
      `${Environments.baseUrl}/api/v1/orders/${id}`,
      data,
      {
        headers: {
          'token ': this.header,
        },
      }
    );
  }

  checkoutSession(data: object, id: string): Observable<any> {
    return this._HttpClient.post(
      `${Environments.baseUrl}/api/v1/orders/checkout-session/${id}?url=http://localhost:4200`,
      //
      {
        'shippingAddress': data,
      },
      {
        headers: this.header,
      }
    );
  }
  getAllOrders(): Observable<any> {
    return this._HttpClient.get(`${Environments.baseUrl}/api/v1/orders/`);
  }
  getUserOrders(id: string): Observable<any> {
    return this._HttpClient.get(
      `${Environments.baseUrl}/api/v1/orders/user/${id}`
    );
  }
}
