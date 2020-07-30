import { InternationalizationService } from './../services/internationalization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private readonly internationalizationService: InternationalizationService
  ) { }

  ngOnInit() {
  }

  public onClick(): void {
    console.log(`enviou!`);
  }

}
