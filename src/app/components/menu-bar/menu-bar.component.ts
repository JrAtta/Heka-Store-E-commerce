import { Subscription } from 'rxjs';
import { NgClass, NgStyle } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { StyleSharedDirective } from '../../core/directive/style-shared.directive';
import { OffcanvasCategoryComponent } from '../offcanvas-category/offcanvas-category.component';
import { log } from 'console';
import { IMenu } from '../../core/interfaces/imenu';
import { OffcanvasMenuComponent } from '../offcanvas-menu/offcanvas-menu.component';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { OffcanvasWishlistComponent } from "../offcanvas-wishlist/offcanvas-wishlist.component";
import { WishlistService } from '../../core/services/wishlist.service';

export  interface Imenu{
  title:string,
  subTitles:string[],

}
@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [StyleSharedDirective, OffcanvasCategoryComponent, OffcanvasMenuComponent, RouterLink, OffcanvasWishlistComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent implements OnInit, OnDestroy  {

  numOfCartItems:number = 0;
  numOfWishlistItems:number = 0;
  Subscription: Subscription[] = [];
  constructor(private _cartService : CartService , private _WishlistService : WishlistService){}

ngOnInit(): void {

 
  
 
this.getLoggedCart()
this.getLoggedWishlist()
}


getLoggedCart(){
 let subscribe1 = this._cartService.cartItemCount$.subscribe({
    next:(res:any) => {
      this.numOfCartItems = res
    },
    error: (err: HttpErrorResponse) => {
      console.log(err.error.message);
    },
  });

   const subscribe2 = this._cartService.getLoggedCart().subscribe({
      next: (res: any) => {
        this.numOfCartItems = res.numOfCartItems;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.message);
      },
    });
  
  this.Subscription.push(subscribe1,subscribe2);
}
getLoggedWishlist(){
  let sub = this._WishlistService.wishlistCount$.subscribe({
    next:(res:any) => {
      this.numOfWishlistItems = res
    },
    error: (err: HttpErrorResponse) => {
      console.log(err.error.message);
    },
 
  });
 let sub1 =  this._WishlistService.getLoggedUserWIshlist().subscribe({
    next:(res:any)=>{
      this.numOfWishlistItems = res.count
    },
    error:(err:HttpErrorResponse)=> {
      console.log(err.error.message)
    },

  });
  this.Subscription.push(sub,sub1)
}
ngOnDestroy(): void {
  this.Subscription.forEach((sub: Subscription) => {
    if (sub) {
      sub.unsubscribe();
    }
  });
}
}
