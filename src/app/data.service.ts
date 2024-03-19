import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  fetchData(): Promise<string> {
    return new Promise(resolve => {
      //Simulating an asynchronous operation (e.g. HTTP Request)
      setTimeout(() => {
        resolve("Data Fetched Successfully");
      }, 2000);
    });
  }

  fetchtheData() {
    return new Promise((resolve, reject) => {
      const errorCondition = true;
      
      if (errorCondition) {
        reject(new Error('Failed to fetch data'));
      } else {
        setTimeout(() => { 
          resolve('Data fetched successfully');
        }, 2000);
      }
    });
  }
}
