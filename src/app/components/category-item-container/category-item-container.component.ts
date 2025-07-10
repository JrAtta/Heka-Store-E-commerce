import {ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, NgZone, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../core/services/categories.service';
import { HttpErrorResponse } from '@angular/common/http';
import {  Subscription } from 'rxjs';

@Component({
  selector: 'app-category-item-container',
  standalone: true,
  imports: [],
  templateUrl: './category-item-container.component.html',
  styleUrl: './category-item-container.component.scss',
})
export class CategoryItemContainerComponent implements OnInit , OnDestroy {
  private readonly _CategoriesService = inject(CategoriesService);
  subscribtion:Subscription[] = [];
  categoryList : ICategoryName[] = [
    {
      name: 'Dress & frock',
      image: './assets/images/icons/dress.svg',
      quantity:53 ,
    },
    {
      name: 'Winter wear',
      image: './assets/images/icons/coat.svg',
      quantity:56 ,
    },
    {
      name: 'Glasses & lens',
      image: './assets/images/icons/glass.svg',
      quantity:68 ,
    },
    {
      name: 'Shorts & jeans',
      image: './assets/images/icons/shorts.svg',
      quantity:84 ,
    },
    {
      name: 'T-shirts',
      image: './assets/images/icons/tee.svg',
      quantity:35 ,
    },
    {
      name: 'jaket',
      image: './assets/images/icons/jacket.svg',
      quantity:16 ,
    },
    {
      name: 'watch',
      image: './assets/images/icons/watch.svg',
      quantity:27 ,
    },
    {
      name: 'hat & caps',
      image: './assets/images/icons/hat.svg',
      quantity:39 ,
    },
  ];
  quantityForApisCategories:number = Math.floor(Math.random() * 100) + 1  ;




 ngOnInit(): void {

    let categoriesSub = this._CategoriesService.getAllCategories().subscribe({
      next: (res:any)=>{
        // console.log(res.data);
        this.categoryList.push(...res.data);
        // console.log(this.categoryList);
        this.categoryList.forEach(category=>{
          category.quantity = Math.floor(Math.random()* 100 ) + 1;
        });


      },
      error:(err:HttpErrorResponse)=>{
        console.log( "Error :"+ err.error.message)
      }
    });
    this.subscribtion.push(categoriesSub);
 }

ngOnDestroy(): void {
    this.subscribtion?.forEach((sub:Subscription)=>{
      if(sub){
        sub.unsubscribe();
      }
    })
}



}

interface ICategoryName {
  image: string,
  name: string,
  quantity?: Number,
}

