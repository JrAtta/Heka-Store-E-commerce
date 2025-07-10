import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NavHomeComponent } from "../nav-home/nav-home.component";
import { ProductsComponent } from "../products/products.component";

import { CategoryItemContainerComponent } from "../category-item-container/category-item-container.component";
import {} from 'ngx-owl-carousel-o';
import { TestimonialComponent } from "../testimonial/testimonial.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavHomeComponent, ProductsComponent, CategoryItemContainerComponent, TestimonialComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


   @ViewChildren('reff') elements!: QueryList<ElementRef>;

    tooglePlus() {
      // ele.nativeElement --> div .accordion-button
      // ele.nativeElement.childNodes[1].childNodes[0] -->  icon .fa-plus
      this.elements.forEach( ele =>{

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
