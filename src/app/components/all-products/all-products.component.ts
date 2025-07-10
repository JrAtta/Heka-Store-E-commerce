import { Component, OnDestroy, OnInit } from '@angular/core';
import { IproductCard } from '../../core/interfaces/iproduct-card';
import { ProductsService } from '../../core/services/products.service';
import { map, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductCardComponent } from "../product-card/product-card.component";
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [ProductCardComponent,FormsModule,NgFor,],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit, OnDestroy {
  Subscription: Subscription[] = [];
  allProduct: IproductCard[] = [];
  staticProductList: IproductCard[] = [];
  errorMsg: string = '';
  limit: number = 20;
  optionsLimit: (number | 'All')[] = [20, 30, 'All'];
  displayProductsLimit: IproductCard[] = [];

  constructor(private _productService: ProductsService) {}
  ngOnInit() {
    this.staticProductList = this._productService.productCardList;
    let allProductsSub = this._productService
      .getAllProducts()
      .pipe(
        map((data) =>
          data.data.map((data: any) => {
            return {
              id: data.id,
              defaultImage: data.imageCover,
              hoverImage: data.images[0],
              category: data.category.name,
              title: data.title,
              rait: data.ratingsAverage,
              ratingAmount: data.ratingsQuantity,
              price: {
                newPrice: data.price,
                oldPrice: data.price - Math.floor(Math.random() * 50),
              },
              description: data.description,
            };
          })
        )
      )
      .subscribe({
        next: (res: any) => {
          this.allProduct = res;
          this.allProduct.forEach((product) => {
            if (
              !this.staticProductList.some(
                (productInMainaArr) => productInMainaArr.title === product.title
              )
            ) {
              this.staticProductList.push(...this.allProduct);
            }
          });
      this.setLimit(this.limit);

        },
        error: (err: HttpErrorResponse) => {
          this.errorMsg = err.error.message;
          console.log(this.errorMsg);
        },
        complete: () => {
          // Done
        },
      });

    this.Subscription.push(allProductsSub);
  }

  setLimit(limit:number | 'All') {
    if(limit === "All"){
     this.displayProductsLimit = this.staticProductList;
    }
    else{
      this.displayProductsLimit = this.staticProductList.slice(0,limit);
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
