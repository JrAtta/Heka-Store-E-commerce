import { NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgStyle,NgIf],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
   _Router = inject(Router);
   _Auth = inject(AuthService)
   
  selectStyle : object = {'font-size' : 'var(--fs-7)', 'font-weight': 'var(--weight-500)'};
  isLoading:boolean = false;

  signOut(){
    this.isLoading = true;

    setTimeout(()=>{
      this.isLoading = false;
      this._Auth.signOut();
    },3000)
  }
}
