import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private _TranslateService:TranslateService, @Inject(PLATFORM_ID) private _PLATFORM_ID: object) {


    // words
    if(isPlatformBrowser(this._PLATFORM_ID)){

      let savedLang = localStorage.getItem('lang');

      this._TranslateService.setDefaultLang('en');


      this._TranslateService.use(savedLang || 'en');


      this.changeDirection();

    }


   }

   // change direction
   changeDirection() : void{
      let savedLang = localStorage.getItem('lang'); // لو عربي هيبقي من اليمين للشمال لليمين
      if(savedLang === 'ar'){
        document.documentElement.dir = 'rtl';
   } else{
    document.documentElement.dir = 'ltr'; //  غير كدا هيكون من الشمال لليمين
   }
  }

  changeLang(lang:string):void{

    if (isPlatformBrowser(this._PLATFORM_ID)) {

      localStorage.setItem('lang', lang);

      this._TranslateService.use(lang);

      this.changeDirection();
    }


  }

}
