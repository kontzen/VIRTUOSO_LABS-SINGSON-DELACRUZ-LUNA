import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.page.html', // html path
  styleUrl: './another.page.scss'
})
export class AnotherPage implements OnInit {

  constructor(private router: Router, private authenticate:AuthenticationService) { }

  ngOnInit() {
    this.authenticate.authenticate = false; // allows to reset boolean state, which allows authenticate buttons to access third page
  }
  goByEvent(){
    this.router.navigate(["third-page"]); // third-page = file name: navigates to third-page
    // method to navigate thirdPage.ts
    {
       // alerts if authenticate button is clicked, and goByEvent button if it is clicked
    }
  
  }
  goWithAuthorization(){
    // authenticate method

    this.authenticate.authenticate = true; 

    /** 
     * this.[AuthenticationService name on constructor()].[authenticate boolean name on authentication service]]
     * see line 11 constructor();
     */
    
    // authenticate boolean can be find on authentication.service.ts
    // this.router.navigate(["another"]);
  }

  ionViewWillEnter(){
    console.log('You will enter second page')
  }

  ionViewDidEnter	(){
    console.log('You did enter second page');
  }

  ionViewWillLeave	(){
    console.log('You will leave second page');
  }

  ionViewDidLeave	(){
    console.log('You did leave second page');
  }

  
}