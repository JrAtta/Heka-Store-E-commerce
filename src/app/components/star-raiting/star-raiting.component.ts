import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-raiting',
  standalone: true,
  imports: [],
  templateUrl: './star-raiting.component.html',
  styleUrl: './star-raiting.component.scss'
})
export class StarRaitingComponent {
  @Input() raiting : number = 0;
    maxRaiting : number = 5 ;           // 5 star

    get stars(): { full:number, half:boolean, empty:number  } {

      const fullStars = Math.floor(this.raiting) ;
      const halfStar  = this.raiting % 1 >= .5 ;  // check if .5 or not
      const emptyStar = this.maxRaiting - fullStars - (halfStar ? 1 : 0 ) ;

      return {
        full : fullStars,
        half : halfStar,
        empty : emptyStar,
      }
    }
}
