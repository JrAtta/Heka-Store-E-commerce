import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AccordionCategoryComponent } from "../accordion-category/accordion-category.component";
import { CurrencyPipe, DatePipe, NgFor } from '@angular/common';
import { StarRaitingComponent } from "../star-raiting/star-raiting.component";
import { BestSellerComponent } from "../best-seller/best-seller.component";
import { Ibest } from '../../core/interfaces/ibest';
import { RouterLink } from '@angular/router';
import { MinimalProductsComponent } from "../minimal-products/minimal-products.component";
import { ProductFeaturedComponent } from "../product-featured/product-featured.component";
import { ProductMainComponent } from "../product-main/product-main.component";
import { map, Subscription } from 'rxjs';
import { IfStmt } from '@angular/compiler';
import { IproductCard } from '../../core/interfaces/iproduct-card';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AccordionCategoryComponent, BestSellerComponent, MinimalProductsComponent, ProductFeaturedComponent, ProductMainComponent,],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent  {










}
