import { ProductsService } from './../../core/services/products.service';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { StarRaitingComponent } from '../star-raiting/star-raiting.component';
import { IproductCard } from '../../core/interfaces/iproduct-card';
import { AsyncPipe, CurrencyPipe, NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
// import { ProductsService } from '../../core/services/products.service';
import { log } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Subscription } from 'rxjs';
import { SearchPipe } from '../../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { SearchService } from '../../core/services/search.service';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    StarRaitingComponent,
    RouterLink,
    SearchPipe,
    FormsModule,
    CurrencyPipe,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) productCardList: IproductCard[] = []; // inject from service
  private _CartService = inject(CartService);
  private _ProductsService = inject(ProductsService);
  private _SearchService = inject(SearchService);
  private _ToastrService = inject(ToastrService);
  private _wishlistService = inject(WishlistService);
  nameString: string = '';
  // constructor(public prd:ProductsService){}
  subscription: Subscription[] = [];

  ngOnInit(): void {
    let sub1 = this._SearchService.searchTerm$.subscribe((term) => {
      this.nameString = term;
    });
    this.subscription.push(sub1);
  }

  addToCart(id: string) {
    let sub2 = this._CartService.addProductToCart(id).subscribe({
      next: (res: any) => {
        this._ToastrService.success(res.message, 'Fresh Cart');
      },
      error: (err: HttpErrorResponse) => {
        this._ToastrService.error('Failed to add product to cart', 'Error', {});
      },
    });
    this.subscription.push(sub2);
  }
  repeatProduct(id: string) {
    let sub3 = this._CartService.addProductToCart(id).subscribe({
      next: (res: any) => {
        this._ToastrService.info(
          'Product repeated successfully to your cart',
          'Fresh Cart'
        );
      },
      error: (err: HttpErrorResponse) => {
        this._ToastrService.error(
          'Failed to repeat product to cart',
          'Error',
          {}
        );
      },
    });
    this.subscription.push(sub3);
  }
  addProductToWishlist(id: string) {
    const addSub = this._wishlistService.addProductToWishlist(id).subscribe({

      next: (res: any) => {
        this._ToastrService.success(res.message, 'wishlist');
      
      },
      error: (err: HttpErrorResponse) => {
        this._ToastrService.error('Failed to add product to wishlist', 'Error');
      },
    });
    this.subscription.push(addSub);
  }





  ngOnDestroy(): void {
    this.subscription.forEach((sub: Subscription) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
