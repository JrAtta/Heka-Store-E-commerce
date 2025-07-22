import { NgStyle } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsService } from '../../core/services/products.service';
import { Console, log } from 'console';
import { IproductCard } from '../../core/interfaces/iproduct-card';
import { map, Subscription } from 'rxjs';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-home',
  standalone: true,
  imports: [NgStyle,TranslateModule,RouterLink],
  templateUrl: './nav-home.component.html',
  styleUrl: './nav-home.component.scss'
})
export class NavHomeComponent implements OnInit, OnDestroy {


  men :string = "Men's Fashion";
  women :string = "Women's Fashion";

  menuTitle:object = {
    ' text-transform': 'capitalize',
    'color': 'var(--davys-gray)',
    'border-bottom': '1px solid var(--cultured)',
    'padding-bottom': '10px',
    'margin-bottom': '10px',
    'font-size' : 'var(--fs-6)',
    'font-weight' : 'var(--weight-600)',
  };

  imageStyle:object = {
   'width':'100%' ,
   'height':'auto' ,
   'margin-top':'20px' ,
   'border-radius':'var(--border-radius-md)' ,

  }
    Subscription :Subscription[] = [];
    allProduct: IproductCard[] = [];
    staticProductList: IproductCard[] = [];
  private readonly  _productService = inject(ProductsService);
  private readonly  _router= inject(Router);

ngOnInit(): void {
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

        },


      });

      this.Subscription.push(allProductsSub);
}




  getProductsByCategory(category: string,): void {

    const totalPrds:IproductCard[] = [];
  const prd = this.staticProductList.filter(product =>  product.category.toLowerCase() === category.toLowerCase()  );
  const prd1 = this.staticProductList.filter(product => product.title.toLowerCase().includes(category.toLowerCase()));
  const prd2 = this.staticProductList.filter(product => product.description?.toLowerCase().includes(category.toLowerCase()));

  totalPrds.push(...prd,...prd1,...prd2);

    // إرسال البيانات للـ Service
    this._productService.setPrdBycategory(totalPrds);

    // التنقل للكومبوننت الجديد
    this._router.navigate(['/products', category]);

  }

ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.

  this.Subscription.forEach((sub:Subscription )=> {
    if(sub){
      sub.unsubscribe();
    }
  } );
}

}
