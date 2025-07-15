import { IproductCard } from './../../core/interfaces/iproduct-card';
import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart.service';
import { Icart } from '../../core/interfaces/icart';
import { CurrencyPipe } from '@angular/common';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Target } from '@angular/compiler';
import { log, count } from 'console';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit, OnDestroy {
  message: string = '';
  disabled: boolean = false;
  subscription: Subscription[] = [];
  cartData: Icart = {} as Icart; //  عشان  ال initail value
  constructor(
    private _CartService: CartService,
  ) {}
  ngOnInit(): void {
       const sub1 = this._CartService.cartData$.subscribe(data=>{
      this.cartData = data
    })
    const sub2 = this._CartService.getLoggedCart().subscribe({
      next: (res: any) => {
        // this.cartData = res.data;


        // this._CartService.updateCartData(res.data)
        this._CartService.updateCartData(res.data)
      },
      
    });

    this.subscription.push(sub1,sub2);
  }

  removeSpecificProduct(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        let sub2 = this._CartService.removeSpeceficCartItme(id).subscribe({
          next: (res: any) => {
            this.cartData = res.data;
          },
          
        });
        this.subscription.push(sub2);
      }
    });
  }

  clearCart() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        let sub3 = this._CartService.clearUserCart().subscribe({
          next: (res: any) => {
            setTimeout(() => {
              this.cartData = {} as Icart;
              this.cartData.totalCartPrice = 0;
              this._CartService.fetchCartCount();
              Swal.fire('Deleted!', 'Your cart has been deleted.', 'success');
            }, 1000);
          },
          
        });

        this.subscription.push(sub3);
      }
    });
  }

  updatcount(id: string, count: number) {
    let sub4 = this._CartService
      .updateCartProductQuantity(id, count)
      .subscribe({
        next: (res: any) => {
          this.cartData = res.data;
        },
        
      });
    this.subscription.push(sub4);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub: Subscription) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
