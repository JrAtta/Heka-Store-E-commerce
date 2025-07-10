import { Component, inject, OnInit } from '@angular/core';
import { StarRaitingComponent } from "../star-raiting/star-raiting.component";
import { Ibest } from '../../core/interfaces/ibest';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-best-seller',
  standalone: true,
  imports: [StarRaitingComponent,RouterLink],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent  {

  bestItems:Ibest[] = [
    {
      image:'./assets/images/products/shoes.jpg',
      title: 'baby fabric shoes',
      rait : 5,
      price : {
        oldPrice: 5 ,
        newPrice: 4,
      },
    },
    {
      image:'./assets/images/products/hoodi.jpg',
      title: "men's hoodies t-shirt",
      rait : 4.5,
      price : {
        oldPrice: 17 ,
        newPrice: 7,
      },
    },
    {
      image:'./assets/images/products/shirt.jpg',
      title: "girls t-shirt",
      rait : 4.7,
      price : {
        oldPrice: 5 ,
        newPrice: 3,
      },
    },
    {
      image:'./assets/images/products/hat.jpg',
      title: "woolen hat for men",
      rait : 5,
      price : {
        oldPrice: 15 ,
        newPrice: 12,
      },
    },
  ];


}
