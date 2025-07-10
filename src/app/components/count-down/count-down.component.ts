import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  standalone: true,
  imports: [],
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.scss'
})
export class CountDownComponent implements OnInit , OnDestroy {
@Input() targetDate:Date;
 remainingDate: {
  days:number,
  hours:number,
  minutes:number,
  secondes:number,
 }
 private intervalDate:any;
 constructor(){
  // [targetDate]="new Date('2025-03-01T23:59:59').getTime()"
  this.targetDate = new Date();
  this.remainingDate = {
    days: 0 ,
    hours: 0 ,
    minutes: 0 ,
    secondes: 0 ,
  }
 }
 ngOnInit(): void {
  this.countDown();
 }
 ngOnDestroy(): void {
  if(this.intervalDate){
    clearInterval(this.intervalDate);
  }
 }

 countDown(){
  this.intervalDate = setInterval(() => {
    const now = new Date().getTime(); //  Current date
    const distance = this.targetDate.getTime() - now ; // وقت (العرض) العد التنازلي = الفرق بين الوقت الوقت المستهدف والوقت الحالي
    if(distance > 0 ){
      this.remainingDate.days = Math.floor( distance / (1000* 60* 60* 24) );
      this.remainingDate.hours = Math.floor((distance % (1000* 60* 60* 24)) / (1000* 60* 60));
      this.remainingDate.minutes = Math.floor(( distance % (1000* 60* 60)) / (1000* 60));
      this.remainingDate.secondes = Math.floor(( distance % (1000* 60)) / 1000);
    }
    else{
      this.remainingDate = {
        days : 0,
        hours : 0,
        minutes : 0,
        secondes : 0,
      };
      clearInterval(this.intervalDate);
    }
  }, 1000);
 }

}
