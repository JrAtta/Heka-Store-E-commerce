import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Environments } from '../Environments/environment';
import { IproductCard } from '../interfaces/iproduct-card';

@Injectable({
 providedIn: 'root'
})
export class ProductsService {

  productCardList:IproductCard[] = [
    {
      id:'1',
      defaultImage:"./assets/images/products/jacket-3.jpg",
      hoverImage:"./assets/images/products/jacket-4.jpg",
      badgeText:"15%",
      category:"jacket",
      title:"Mens Winter Leathers  Jackets",
      rait:3.7,
      price:{
        newPrice:48,
        oldPrice:75,
      }
    },
    {
      id:'2',
      defaultImage:"./assets/images/products/shirt-1.jpg",
      hoverImage:"./assets/images/products/shirt-2.jpg",
      badgeText:"sale",
      category:"shirt",
      title:"Pure Garment Dyed Cotton Shirt",
      rait:3.5,
      price:{
        newPrice:45,
        oldPrice:56,
      }
    },
    {
      id:'3',
      defaultImage:"./assets/images/products/jacket-5.jpg",
      hoverImage:"./assets/images/products/jacket-6.jpg",
      // badgeText:"sale",
      category:"jacket",
      title:"MEN Yarn Fleece Full-Zip Jacket",
      rait:3,
      price:{
        newPrice:58,
        oldPrice:65,
      }
    },
    {
      id:'4',
      defaultImage:"./assets/images/products/clothes-3.jpg",
      hoverImage:"./assets/images/products/clothes-4.jpg",
      badgeText:"new",
      category:"skirt",
      title:"Black Floral Wrap Midi' Skirt'",
      rait:5,
      price:{
        newPrice:25,
        oldPrice:35,
      }
    },
    {
      id:'5',
      defaultImage:"./assets/images/products/shoe-2.jpg",
      hoverImage:"./assets/images/products/shoe-2_1.jpg",
      // badgeText:"new",
      category:"shoes",
      title:"Casual Men's Brown shoes",
      rait:5,
      price:{
        newPrice:99,
        oldPrice:105,
      }
    },
    {
      id:'6',
      defaultImage:"./assets/images/products/watch-3.jpg",
      hoverImage:"./assets/images/products/watch-4.jpg",
      badgeText:"sale",
      category:"wathces",
      title:"Pocket Watch Leather Pouch",
      rait:3.4,
      price:{
        newPrice:150,
        oldPrice:170,
      }
    },
    {
      id:'7',
      defaultImage:"./assets/images/products/watch-1.jpg",
      hoverImage:"./assets/images/products/watch-2.jpg",
      // badgeText:"sale",
      category:"wathces",
      title:"Smart watche Vital Plus",
      rait:4,
      price:{
        newPrice:100,
        oldPrice:120,
      }
    },
    {
      id:'8',
      defaultImage:"./assets/images/products/party-wear-1.jpg",
      hoverImage:"./assets/images/products/party-wear-2.jpg",
      badgeText:"sale",
      category:"party wear",
      title:"Womens Party Wear Shoes",
      rait:3.7,
      price:{
        newPrice:25,
        oldPrice:30,
      }
    },
    {
      id:'9',
      defaultImage:"./assets/images/products/jacket-1.jpg",
      hoverImage:"./assets/images/products/jacket-2.jpg",
      // badgeText:"sale",
      category:"jacket",
      title:"Mens Winter Leathers brown Jackets",
      rait:4.6,
      price:{
        newPrice:32,
        oldPrice:45,
      }
    },
    {
      id:'10',
      defaultImage:"./assets/images/products/sports-2.jpg",
      hoverImage:"./assets/images/products/sports-4.jpg",
      badgeText:"sale",
      category:"sport",
      title:"Trekking & Running Shoes - black",
      rait:3.7,
      price:{
        newPrice:58,
        oldPrice:64,
      }
    },
    {
      id:'11',
      defaultImage:"./assets/images/products/shoe-1.jpg",
      hoverImage:"./assets/images/products/shoe-1_1.jpg",
      // badgeText:"sale",
      category:"formal",
      title:"Men's Leather Formal Wear shoes",
      rait:4.3,
      price:{
        newPrice:50,
        oldPrice:65,
      }
    },
    {
      id:'12',
      defaultImage:"./assets/images/products/shorts-1.jpg",
      hoverImage:"./assets/images/products/shorts-2.jpg",
      badgeText:"sale",
      category:"sports",
      title:"Better Basics French Terry Sweatshorts",
      rait:3.5,
      price:{
        newPrice:78,
        oldPrice:85,
      }
    },
];




constructor(private _HtppClient:HttpClient) { }


  // api
  getAllProducts():Observable<any>{
    return this._HtppClient.get(`${Environments.baseUrl}/api/v1/products`)

  }
 // api
  getSpecificProduct(id:string):Observable<any>{
    return this._HtppClient.get(`${Environments.baseUrl}/api/v1/products/${id}`)
  }

  // static
  getProductByName(title: string) : IproductCard | undefined {
    return this.productCardList.find(product => product.title.toLowerCase() === title.toLowerCase());
  }
 

}
