import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  constructor(private readonly translate: TranslateService) {}

  public setDefaultLanguage(mockLang?: string): void {
    if (mockLang) { this.translate.use(mockLang) } else {
      const browserLang = this.translate.getBrowserCultureLang();
      this.translate.setDefaultLang('en');
      this.translate.use(browserLang)
    }
  }

}
