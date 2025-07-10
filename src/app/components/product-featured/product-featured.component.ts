import { Component, OnDestroy, OnInit } from '@angular/core';
import { StarRaitingComponent } from '../star-raiting/star-raiting.component';
import { CountDownComponent } from '../count-down/count-down.component';
import { RouterLink } from '@angular/router';
import { IproductCard } from '../../core/interfaces/iproduct-card';
import { CurrencyPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-featured',
  standalone: true,
  imports: [StarRaitingComponent, CountDownComponent, ],
  templateUrl: './product-featured.component.html',
  styleUrl: './product-featured.component.scss',
})
export class ProductFeaturedComponent {
  targetDate = new Date('2025-12-31T23:59:59');
  targetDate1 = new Date('2025-09-31T21:44:20');
  constructor (private _ToastrService:ToastrService){}


  addToCart(){
    this._ToastrService.error("Failed to add product to cart",'Error')
  }
 }
