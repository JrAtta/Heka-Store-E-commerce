import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-home',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './nav-home.component.html',
  styleUrl: './nav-home.component.scss'
})
export class NavHomeComponent {

  menuTitle:object = {
    ' text-transform': 'capitalize',
    'color': 'var(--davys-gray)',
    'border-bottom': '1px solid var(--cultured)',
    'padding-bottom': '10px',
    'margin-bottom': '10px',
    'font-size' : 'var(--fs-6)',
    'font-weight' : 'var(--weight-600)',
  };

  imageStyle:object = {
   'width':'100%' ,
   'height':'auto' ,
   'margin-top':'20px' ,
   'border-radius':'var(--border-radius-md)' ,

  }
}
