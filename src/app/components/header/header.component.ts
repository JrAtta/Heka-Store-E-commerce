import { isPlatformBrowser, NgStyle } from '@angular/common';
import { Component, DoCheck, inject, Input, input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { StyleSharedDirective } from '../../core/directive/style-shared.directive';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../../core/services/search.service';
import { CartService } from '../../core/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { OffcanvasWishlistComponent } from "../offcanvas-wishlist/offcanvas-wishlist.component";
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from '../../core/services/wishlist.service';
import { subscribe } from 'diagnostics_channel';
import { Iwishlist } from '../../core/interfaces/iwishlist';
// import { StyleSharedDirective } from '../../core/directive/style-shared.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle, StyleSharedDirective, RouterLink, FormsModule, OffcanvasWishlistComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  numOfCartItems: number = 0;
  Subscription: Subscription[] = [];
  numOfWishlistItems: number = 0;
  wishlistItems: Iwishlist[] = [];
  private readonly _PLATFORM_ID = inject(PLATFORM_ID)
  private readonly _searchService = inject(SearchService);
  private readonly _cartService = inject(CartService);
  private readonly _wishlistService = inject(WishlistService);
  onSerach(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this._searchService.updateSearchTerm(inputValue);
  }



  ngOnInit(): void {
  const sub = this._cartService.cartItemCount$.subscribe({
    next: (res: any) => {
      this.numOfCartItems = res;
    },
    error: (err: HttpErrorResponse) => {
      console.log(err.error.message);
    },
  });
   const sub1 = this._cartService.getLoggedCart().subscribe({
      next: (res: any) => {
        this.numOfCartItems = res.numOfCartItems;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err.error.message);
      },
    });

    
 
  this.Subscription.push(sub);
  this.Subscription.push(sub1);
  

    this.getWishlistItems();
  }

getWishlistItems(){
  const sub2 = this._wishlistService.wishlistCount$.subscribe({
    next: (res: any) => {
      this.numOfWishlistItems = res;
    },
    error: (err: HttpErrorResponse) => {
      console.log(err.error.message);
    },
  });
this.Subscription.push(sub2);
  if( isPlatformBrowser(this._PLATFORM_ID)){ 
     const sub2  = this._wishlistService.getLoggedUserWIshlist().subscribe({
    next:(res:any)=>{
      
      this.numOfWishlistItems = res.count;
      this.wishlistItems = res.data
    }
  });
  // this.Subscription.push(sub1);

  this.Subscription.push(sub2);
  }
}


  ngOnDestroy(): void {
    this.Subscription.forEach((sub: Subscription) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
