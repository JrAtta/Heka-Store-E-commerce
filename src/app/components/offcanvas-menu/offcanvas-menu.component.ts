import { Component, ElementRef, inject, QueryList, ViewChildren } from '@angular/core';
import { IMenu } from '../../core/interfaces/imenu';
import { NgIf, NgStyle } from '@angular/common';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-offcanvas-menu',
  standalone: true,
  imports: [NgStyle,NgIf],
  templateUrl: './offcanvas-menu.component.html',
  styleUrl: './offcanvas-menu.component.scss'
})
export class OffcanvasMenuComponent {
 readonly _Auth = inject(AuthService )
  isLoading:boolean = false;
    @ViewChildren('ref') elements!: QueryList<ElementRef>;
    @ViewChildren('ref2') items!: QueryList<ElementRef>;

    tooglePlus() {
      this.elements.forEach(ele=>{

        if (ele.nativeElement.ariaExpanded === 'true') {
        ele.nativeElement.style.border = 'none';

        ele.nativeElement.childNodes[1].childNodes[0].classList =
          'fas fa-minus';
      } else {
        ele.nativeElement.style.borderBottom = '1px solid var(--cultured)';
        // ele.nativeElement.style.transition = 'borderBottom .6s ease';
        ele.nativeElement.childNodes[1].childNodes[0].classList =
          'fas fa-plus';
      }
      });
    }

    toogleCaretLeft(){
      this.items.forEach(item=>{

        if (item.nativeElement.ariaExpanded === 'true') {
          item.nativeElement.style.border = 'none';

          item.nativeElement.childNodes[1].childNodes[0].classList =
            'fas fa-caret-down';
        } else {
          item.nativeElement.style.borderBottom = '1px solid var(--cultured)';
          // ele.nativeElement.style.transition = 'borderBottom .6s ease';
          item.nativeElement.childNodes[1].childNodes[0].classList =
            'fas fa-caret-left';

        }
        });


    }

    menuDetailes:IMenu[] = [
      {
        title: "Men's",
        subTitles:[
          'shirt',
          'Shorts & Jeans',
          'Safety Shoes',
          'Wallet',
        ],
      },
      {
        title: "women's",
        subTitles:[
          'Dress & Frock',
          'Earrings',
          'Necklace',
          'Makeup Kit',
        ],
      },
      {
        title: "Jewelry",
        subTitles:[
          'Couple Rings',
          'Necklace',
          'Bracelets',
        ],
      },
      {
        title: "Perfume",
        subTitles:[
          'Clothes Perfume',
          'Deodorant',
          'Flower Fragrance',
          'Air Freshener',
        ],
      },
    ]


   signOut(){
      this.isLoading = true;

      setTimeout(()=>{
        this.isLoading = false;
        this._Auth.signOut();
      },3000)
    }
}
