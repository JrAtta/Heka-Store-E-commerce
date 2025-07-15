import { Subscription } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { StarRaitingComponent } from '../star-raiting/star-raiting.component';
import { CurrencyPipe } from '@angular/common';
import { WishlistService } from '../../core/services/wishlist.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Iwishlist } from '../../core/interfaces/iwishlist';
import { CartService } from '../../core/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-offcanvas-wishlist',
  standalone: true,
  imports: [StarRaitingComponent, CurrencyPipe],
  templateUrl: './offcanvas-wishlist.component.html',
  styleUrl: './offcanvas-wishlist.component.scss',
})
export class OffcanvasWishlistComponent implements OnInit, OnDestroy {
  @Input() numOfWishlistItems: number = 0;
  @Input() wishlistData: Iwishlist[] = [];
  subscription: Subscription[] = [];
  constructor(
    private _wishlistService: WishlistService,
    private _CartService: CartService,
    private _toastrService: ToastrService
  ) {}
  ngOnInit(): void {

    this.getLoggedWishlistItems();
  }

  addToCart(id: string) {
    const sub2 = this._CartService.addProductToCart(id).subscribe({
      next: (res: any) => {
        this._toastrService.success(res.message, 'Fresh Cart');
        this._CartService.getLoggedCart().subscribe();
      },
      
    });

    this.subscription.push(sub2);
  }

  deleteProductFromWishlist(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        let sub4 = this._wishlistService
          .removeProductFromWishlist(id)
          .subscribe({
            next: (res: any) => {
              setTimeout(() => {
                this.getLoggedWishlistItems();
                this.numOfWishlistItems = res.data.length;
                Swal.fire('Deleted!', 'Your Item has been deleted.', 'success');
              }, 1000);
            },
            
          });
        this.subscription.push(sub4);
      }
    });
  }

  getLoggedWishlistItems() {
    const sub3 = this._wishlistService.getLoggedUserWIshlist().subscribe({
      next: (res: any) => {
        this.numOfWishlistItems = res.count;
        this.wishlistData = res.data;
      },
      
    });
    this.subscription.push(sub3);
  }

  ngOnDestroy(): void {
    this.subscription.forEach((sub: Subscription) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }
}
