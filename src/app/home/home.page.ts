import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private router: Router,
    private authenticate: AuthenticationService
  ) {}

  goByEvent() {
    this.router.navigate(['another']);
  }

  goWithAuthorization() {
    this.authenticate.authenticate = true;
  }

  ionViewWillEnter() {
    console.log('You will enter home page');
  }

  ionViewDidEnter() {
    console.log('You did enter home page');
  }

  ionViewWillLeave() {
    console.log('You will leave home page');
  }

  ionViewDidLeave() {
    console.log('You did leave home page');
  }
}
