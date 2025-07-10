import { Pipe, PipeTransform } from '@angular/core';
import { IproductCard } from '../interfaces/iproduct-card';
import { flush } from '@angular/core/testing';

@Pipe({
  name: 'search',
  standalone: true,
  pure:false,
})
export class SearchPipe implements PipeTransform {

 transform(products:any[] , saerchName:string):any[] {
  if(!products || !saerchName){
    return products;
  }

  saerchName =saerchName.toLowerCase();

  return products.filter(product => {

   return product.title.toLowerCase().includes(saerchName) ||
    product.category.toLowerCase().includes(saerchName)
  })
 }

}
