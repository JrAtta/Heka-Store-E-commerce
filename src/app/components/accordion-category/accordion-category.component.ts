import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { ICategory } from '../../core/interfaces/icategory';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-accordion-category',
  standalone: true,
  imports: [NgFor],
  templateUrl: './accordion-category.component.html',
  styleUrl: './accordion-category.component.scss'
})
export class AccordionCategoryComponent {
  @ViewChildren('reff') elements!: QueryList<ElementRef>;
  @Input() uniqueId: string = '';
  
  categories : ICategory[]= [
    {
      title: 'Clothes',
      icon: './assets/images/icons/dress.svg',
      items: [
        { name: 'Shirt', count: 300 },
        { name: 'Shorts & Jeans', count: 60 },
        { name: 'Jacket', count: 50 },
        { name: 'Dress & Frock', count: 87 },
      ],
    },
    {
      title: 'Footwear',
      icon: './assets/images/icons/shoes.svg',
      items: [
        { name: 'Sports', count: 45 },
        { name: 'Formal', count: 75 },
        { name: 'Casual', count: 35 },
        { name: 'Safety Shoes', count: 26 },
      ],
    },
    {
      title: 'jewelry',
      icon: './assets/images/icons/jewellary.svg',
      items: [
        { name: 'Clothes Perfume', count: '12 pcs' },
        { name: 'deodorant', count: '50 pcs' },
        { name: 'jacket', count: '60 pcs' },
        { name: 'dress & frock', count: '87 pcs' },
      ],
    },
    {
      title: 'perfume',
      icon: './assets/images/icons/perfume.svg',
      items: [
        { name: 'Earrings', count: 46 },
        { name: 'Couple Rings', count: 73 },
        { name: 'Necklace', count: 61 },
      ],
    },
    {
      title: 'cosmetics',
      icon: './assets/images/icons/cosmetics.svg',
      items: [
        { name: 'Shampoo', count: 68 },
        { name: 'Shampoo', count: 46 },
        { name: 'Body Wash', count: 79 },
        { name: 'Makeup Kit', count: 23 },
      ],
    },
    {
      title: 'glasses',
      icon: './assets/images/icons/glass.svg',
      items: [
        { name: 'Sunglasses', count: 50 },
        { name: 'lenses', count: 48 },
      ],
    },
    {
      title: 'Bags',
      icon: './assets/images/icons/bag.svg',
      items: [
        { name: 'Shopping Bag', count: 62 },
        { name: 'Gym Backpack', count: 35 },
        { name: 'Purse', count: 80 },
        { name: 'Wallet', count: 75 },
      ],
    },
    // Add other categories here
  ];

  tooglePlus() {
    // ele.nativeElement --> div .accordion-button
    // ele.nativeElement.childNodes[1].childNodes[0] -->  icon .fa-plus
    this.elements.forEach(ele=>{

      if (ele.nativeElement.ariaExpanded === 'true') {
      ele.nativeElement.style.border = 'none';

      ele.nativeElement.childNodes[1].childNodes[0].classList =
        'fas fa-minus';
    } else {
      ele.nativeElement.childNodes[1].childNodes[0].classList =
        'fas fa-plus';
    }
    });
  }
}
