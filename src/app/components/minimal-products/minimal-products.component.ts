import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MinimalItemsService } from '../../core/services/minimal-items.service';
import { IminimalItems } from '../../core/interfaces/iminimal-items';

@Component({
  selector: 'app-minimal-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './minimal-products.component.html',
  styleUrl: './minimal-products.component.scss',
})
export class MinimalProductsComponent implements OnInit {
  private _MinimalItemsService = inject(MinimalItemsService);
  newArrivalItems: IminimalItems[] = [];
  trendingItems: IminimalItems[] = [];
  topRatedItems: IminimalItems[] = [];

  ngOnInit(): void {
    this.newArrivalItems = this._MinimalItemsService.newArrivalItems;
    this.trendingItems = this._MinimalItemsService.trendingItems;
    this.topRatedItems = this._MinimalItemsService.topRatedItems;
  }
}
