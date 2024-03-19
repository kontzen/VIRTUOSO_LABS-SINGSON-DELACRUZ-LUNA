import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data: String = '';
  isLoading = false;
  loadingText = 'loading...';
  objectNum = 3; //since may [1, 2] na, sa 3 sisimula magbibilang kada trigger ng addObject()
  objectArray = ['1', '2'];
  showObj = false;

  constructor(
    private route: Router,
    private authenticate: AuthenticationService,
    private service: DataService
  ) {}

  async fetchData() {
    try {
      this.isLoading = true;
      this.data = await this.service.fetchData();
      console.log(this.data);
    } catch (error) {
      console.error(error);
    } finally {
      this.showObj = true;
      this.isLoading = false;
    }
  }

  addObject() {
    if (this.authenticate.authenticate) {
      this.objectArray = [...this.objectArray, this.objectNum.toString()];
      this.objectNum += 1;
    } else {
      alert('Please authenticate first.');
      console.log('You are not authenticated.');
    }
  }

  showObject() {
    if (this.authenticate.authenticate) {
      this.fetchData();
    } else {
      alert('Please authenticate first.');
      console.log('You are not authenticated.');
    }
  }

  authenticateButton() {
    this.authenticate.authenticate = true;
    alert('You are now authenticated');
    //This method will set boolean value of authentication to true which will allowed to
  }
  FauthenticateButton() {
    this.authenticate.authenticate = false;
    alert('You are no longer authenticated');
    this.showObj = false;
  }

  //------------------------------------------------------------------
  gotoAnother() {
    this.route.navigate(['second-page']);
    //This method will be invoked by the button in html and navigate to ./second-page
  }
}
