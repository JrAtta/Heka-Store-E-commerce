import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  mailEx:string = 'example@gmail.com';

  brands :Ibrands [] = [
    {
      title : 'fashion : ',
      links :[
        't-shirt',
        'shirts',
        'shorts & jeans',
        'jacket',
        'dress & frock',
        'innerwear',
        'hosiery',
      ]
    },
    {
      title : 'footwear  : ',
      links :[
        'sport',
        'formal',
        'Boots',
        'casual',
        'cowboy shoes',
        'safety shoes',
        'Party wear shoes',
        'Branded',
        'Firstcopy',
        'Long shoes',
      ]
    },
    {
      title : 'jewellery  : ',
      links :[
        'Necklace',
        'earning',
        'couple rings',
        'pendants',
        'crystal',
        'bangles',
        'bracelets',
        'nosepin',
        'chain',
      ]
    },
    {
      title : 'cosmetics  : ',
      links :[
        'Shampoo',
        'Bodywash',
        'Facewash',
        'makeup kit',
        'liner',
        'lipstick',
        'prefume',
        'Body soap',
        'hair gel',
        'hair colors',
        'hair dye',
        'skin loson',
        'liner',
        'lipstick',
      ]
    },
  ];

  navCategories :Ibrands[] = [
    {
      title : 'Popular Categories' ,
      links: [
        'Fashion',
        'Electronic',
        'Cosmetic',
        'Health',
        'Watches',
      ]
    },
    {
      title : 'Products' ,
      links: [
        'Prices drop',
        'New products',
        'Best sales',
        'Contact us',
        'Sitemap',
      ]
    },
    {
      title : 'Our Company' ,
      links: [
        'Delivery',
        'Legal Notice',
        'Terms and conditions',
        'About us',
        'Secure payment',
      ]
    },
    {
      title : 'Services' ,
      links: [
        'Prices drop',
        'New products',
        'Best sales',
        'Contact us',
        'Sitemap',
      ]
    },

  ]
}


export interface Ibrands{
  title:string ,
  links: string[]
}
