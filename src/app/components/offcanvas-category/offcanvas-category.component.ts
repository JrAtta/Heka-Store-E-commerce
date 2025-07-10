import {
  Component,

} from '@angular/core';
import { AccordionCategoryComponent } from "../accordion-category/accordion-category.component";
import { BestSellerComponent } from "../best-seller/best-seller.component";

@Component({
  selector: 'app-offcanvas-category',
  standalone: true,
  imports: [AccordionCategoryComponent, BestSellerComponent],
  templateUrl: './offcanvas-category.component.html',
  styleUrl: './offcanvas-category.component.scss',
})
export class OffcanvasCategoryComponent {





}
