import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-third-page',
  templateUrl: 'third-page.html',
})
export class thirdPagePage {
  constructor(private route:Router, private authenticate:AuthenticationService) {}
  goByEvent(){
    this.route.navigate(["third-page"]);
    // Incomplete
  }
  goWithAuthorization(){
    // for authorization
    this.authenticate.authenticate = true;
    // this.router.navigate(["another"]);
    // Incomplete
  }

  /**
   * constructor and methods() = incomplete
   */

  ionViewWillEnter(){
    console.log('You will enter third page')
  }

  ionViewDidEnter(){
    console.log('You did enter third page');
  }

  ionViewWillLeave(){
    console.log('You will leave third page');
  }

  ionViewDidLeave(){
    console.log('You did leave third page');
  }

}
