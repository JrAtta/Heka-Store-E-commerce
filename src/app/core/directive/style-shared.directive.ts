import { Directive, ElementRef, Input, input, OnInit } from '@angular/core';

@Directive({
  selector: '[appStyleShared]',
  standalone: true
})
export class StyleSharedDirective implements OnInit {
 @Input('appStyleShared') customEle! : string;
  constructor(private ele :ElementRef) { }
ngOnInit(): void {
  // console.log(this.ele.nativeElement)
  this.ele.nativeElement.style.cssText = `
   font-size: var(--fs-8);
  font-weight: var(--weight-500);
  background: var(--bittersweet);
  border-radius: var(--border-radius-circle);
  top: 0px;
  right: -9px;
  width: 20px;
  height: 20px;
  color: var(--white);

`
  // if(this.customEle){
    // this.ele.nativeElement.style.cssText= this.customEle;
  // }
}



}
