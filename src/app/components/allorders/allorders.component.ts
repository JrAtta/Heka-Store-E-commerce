import { Subscription } from 'rxjs';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { OrdersService } from '../../core/services/orders.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-allorders',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './allorders.component.html',
  styleUrl: './allorders.component.scss',
})
export class AllordersComponent implements OnInit, OnDestroy {
  private _OrdersService = inject(OrdersService);
  private _ActivatedRoute = inject(ActivatedRoute);
  subscription: Subscription[] = [];
  cart_Id!: string;
  allOrders!: FormGroup;
  constructor(private _fb: FormBuilder) {
    this.allOrders = this._fb.group({
      detailes: [null, [Validators.required]],
      phone: [
        null,
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)],
      ],
      city: [null, [Validators.required]],
    });
  }
  ngOnInit(): void {
    let sub1 = this._ActivatedRoute.paramMap.subscribe({
      next: (params: ParamMap) => {
        this.cart_Id = params.get('id')!;
      },
    });
    this.subscription.push(sub1);
  }

  orderSubmit() {
    if (this.allOrders.valid) {
      let sub2 = this._OrdersService.checkoutSession(this.allOrders.value,this.cart_Id).subscribe({
        next: (res: any) => {
          console.log(res);
          window.open(res.session.url)
        },
        error: (err:HttpErrorResponse)=>{
          console.log(err.error.message)
        }
      });
      this.subscription.push(sub2);
    } else {
      this.allOrders.markAllAsTouched();
    }
  }
  ngOnDestroy(): void {
    this.subscription.forEach((subscription: Subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
}
