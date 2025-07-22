import { FormsModule } from '@angular/forms';
import { NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule,  } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [NgStyle,NgIf, TranslateModule,FormsModule,NgxSpinnerModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  selectedLanguage: string = 'en';
  private readonly _Auth = inject(AuthService)
  private readonly _TranslationService = inject(TranslationService);

  selectStyle : object = {'font-size' : 'var(--fs-7)', 'font-weight': 'var(--weight-500)'};
  isLoading:boolean = false;

  signOut(){
    this.isLoading = true;

    setTimeout(()=>{
      this.isLoading = false;
      this._Auth.signOut();
    },3000)
  }

  change(lang:string):void {
    this._TranslationService.changeLang(lang);

  }
  onLanguageChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  this.change(target.value);
}


}
