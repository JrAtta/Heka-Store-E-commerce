import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.scss',
})
export class TestimonialComponent {
  services: any[] =[];
  blogData: any[] = [
    {
      image:'./assets/images/blog-1.jpg',
      category:'fashion',
      title :'Clothes Retail KPIs 2021 Guide for Clothes Executives.',
      meta :'By Mr Admin / Apr 06, 2022',
    },
    {
      image:'./assets/images/blog-2.jpg',
      category:'Clothes',
      title :'Curbside fashion Trends: How to Win the Pickup Battle.',
      meta :'By Mr Robin / Jan 18, 2022',
    },
    {
      image:'./assets/images/blog-3.jpg',
      category:'Shoes',
      title :'EBT vendors: Claim Your Share of SNAP Online Revenue.',
      meta :'By Mr Selsa / Feb 10, 2022',
    },
    {
      image:'./assets/images/blog-4.jpg',
      category:'Electronics',
      title :'Curbside fashion Trends: How to Win the Pickup Battle.',
      meta :'By Mr Pawar / Mar 15, 2022',
    },
  ];
  constructor(private _DomSanitizer:DomSanitizer){
    const services =  [
    {
      service: 'Worldwide Delivery',
      detailes: 'For Order Over $100',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="37px" viewBox="0 -960 960 960" width="37px" fill="#ff8f9c"><path d="M152-80h-32v-80h32q48 0 91.5-10.5T341-204q38 19 66.5 31.5T480-160q44 0 72.5-12.5T619-204q53 23 97.5 33.5T809-160h31v80h-31q-49 0-95.5-9T622-116q-40 19-73 27t-69 8q-36 0-68.5-8T339-116q-45 18-91.5 27T152-80Zm328-160q-60 0-105-40l-45-40q-27 27-60.5 46T198-247l-85-273q-5-17 3-31t25-19l59-16v-134q0-33 23.5-56.5T280-800h100v-80h200v80h100q33 0 56.5 23.5T760-720v134l59 16q17 5 25 19t3 31l-85 273q-38-8-71.5-27T630-320l-45 40q-45 40-105 40Zm2-80q31 0 55-20.5t44-43.5l46-53 41 42q11 11 22.5 20.5T713-355l46-149-279-73-278 73 46 149q11-10 22.5-19.5T293-395l41-42 46 53q20 24 45 44t57 20ZM280-607l200-53 200 53v-113H280v113Zm201 158Z"/></svg>` ,
    },
    {
      service: 'Next Day delivery',
      detailes: 'UK Orders Only',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="37px" viewBox="0 -960 960 960" width="37px" fill="#ff8f9c"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg>` ,
    },
    {
      service: 'Best Online Support',
      detailes: 'Hours: 8AM - 11PM',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="37px" viewBox="0 -960 960 960" width="37px" fill="#ff8f9c"><path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/></svg>`,
    },
    {
      service: 'Return Policy',
      detailes: 'Easy & Free Return',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="37px" viewBox="0 -960 960 960" width="37px" fill="#ff8f9c"><path d="M280-200v-80h284q63 0 109.5-40T720-420q0-60-46.5-100T564-560H312l104 104-56 56-200-200 200-200 56 56-104 104h252q97 0 166.5 63T800-420q0 94-69.5 157T564-200H280Z"/></svg>`,
    },
    {
      service: '30% money back',
      detailes: 'For Order Over $100',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="37px" viewBox="0 -960 960 960" width="37px" fill="#ff8f9c"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480q0-17-11.5-28.5T480-520q-17 0-28.5 11.5T440-480q0 17 11.5 28.5T480-440Zm0-160q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm320 440H160q-33 0-56.5-23.5T80-240v-160q33 0 56.5-23.5T160-480q0-33-23.5-56.5T80-560v-160q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v160q-33 0-56.5 23.5T800-480q0 33 23.5 56.5T880-400v160q0 33-23.5 56.5T800-160Zm0-80v-102q-37-22-58.5-58.5T720-480q0-43 21.5-79.5T800-618v-102H160v102q37 22 58.5 58.5T240-480q0 43-21.5 79.5T160-342v102h640ZM480-480Z"/></svg>`,
    },
  ];

  this.services = services.map(service =>({
    ...service,
    svg: this._DomSanitizer.bypassSecurityTrustHtml(service.icon) // هنا بقوله ان  الsvg    امن ومفيهوش اي مشكله
  }))
  }
}
