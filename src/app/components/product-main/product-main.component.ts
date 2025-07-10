import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ProductCardComponent } from "../product-card/product-card.component";
import { IproductCard } from '../../core/interfaces/iproduct-card';
import { ProductsService } from '../../core/services/products.service';
import { map, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-main',
  standalone: true,
  imports: [ ProductCardComponent],
  templateUrl: './product-main.component.html',
  styleUrl: './product-main.component.scss'
})
export class ProductMainComponent implements  OnInit,OnDestroy{
  readonly _ProductsService = inject(ProductsService);
  readonly _router = inject(Router);
  subscription:Subscription[]  = [];
  productStaticList:IproductCard[] = [];
  productList:IproductCard[] = [];
  errorMsg : string = '';
ngOnInit(): void {
  this.productStaticList = this._ProductsService.productCardList;
  }



navigateToAllProducts(){
this._router.navigate(['/allproducts'])
}

ngOnDestroy(): void {
  this.subscription?.forEach((sub:Subscription)=>{
    if(sub){
      sub.unsubscribe();
    }
  });
}

}
