import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';
import { IproductCard } from '../../core/interfaces/iproduct-card';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-products-by-category',
  standalone: true,
  imports: [NgFor, NgIf, TitleCasePipe, ProductCardComponent],
  templateUrl: './products-by-category.component.html',
  styleUrl: './products-by-category.component.scss'
})
export class ProductsByCategoryComponent implements OnInit {

  constructor(private _productService:ProductsService){}
  categoryName: string = '';
  productsByCategory: IproductCard[] = [];
  private subscription: Subscription = new Subscription();

  private readonly _activatedRoute = inject(ActivatedRoute);
   ngOnInit(): void {

     this._activatedRoute.paramMap.subscribe((paraMap:ParamMap) => {
      this.categoryName = paraMap.get('category') || '';
    });

    // الاستماع للبيانات المفلترة من الـ Service
    this.subscription = this._productService.prdByCategory$.subscribe(products => {
        this.productsByCategory = products;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
