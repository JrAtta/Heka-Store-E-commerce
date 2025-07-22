import { provideClientHydration } from '@angular/platform-browser';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,  } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';
import { IproductCard } from '../../core/interfaces/iproduct-card';
import { StarRaitingComponent } from "../star-raiting/star-raiting.component";
import { ProductMainComponent } from "../product-main/product-main.component";
import {CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CurrencyPipe, NgIf } from '@angular/common';
import { Subscription } from 'rxjs';
import { CartService } from '../../core/services/cart.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-detailes',
  standalone: true,
  imports: [StarRaitingComponent, ProductMainComponent, CarouselModule,NgIf,CurrencyPipe],
  templateUrl: './product-detailes.component.html',
  styleUrl: './product-detailes.component.scss'
})
export class ProductDetailesComponent implements OnInit , OnDestroy {

  private _ToastrService = inject(ToastrService)
  private _CartService = inject(CartService)
  private _ActivatedRoute = inject(ActivatedRoute)
  private _ProductsService = inject(ProductsService)
  subscription:Subscription[]= [];
  title!:string;
  id!:string;
  product!:IproductCard| undefined  ;
  productCardLists : IproductCard[] =  [];
ngOnInit(): void {

this.productCardLists = this._ProductsService.productCardList
  console.log(this._ActivatedRoute);
 let sub1 = this._ActivatedRoute.paramMap.subscribe({
    next:(paraMap:ParamMap)=>{
      this.title = paraMap.get("title") || '' ; // handle possible null values  (  ! =   || '')
      this.id = paraMap.get('id')!;
   let product = this._ProductsService.getProductByName(this.title);
    this.product = product;

    }
  });

   this.subscription.push(sub1);

}
addToCart(id:string){
  let sub2 = this._CartService.addProductToCart(id).subscribe({
    next:(value:any)=> {
      // logic of message which added to cart
      this._ToastrService.success(value.message,"Fresh Cart");
    },
    error:(err:HttpErrorResponse) => {
      console.log(err.error.message)
      this._ToastrService.error(err.error.message,"Fresh Cart");

    },
  });
  this.subscription.push(sub2);
}

customOptions: OwlOptions = {
  loop: true,
  mouseDrag: false,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  // animateIn:"ease",
  // animateOut:true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },

  },
  nav: true,
}
ngOnDestroy(): void {
  this.subscription?.forEach((sub:Subscription) => {
    if(sub){
      sub.unsubscribe();

    }
  })
}
}

