import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor() { }

  makeGetRequest() {
    console.log('making GET request');
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Request successful');
        resolve();
      }, 1000);
    });
  }

  makePostRequest() {
    console.log('making POST request');
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Request successful');
        resolve();
      }, 1000);
    });
  }

  makePutRequest() {
    console.log('making PUT request');
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Request successful');
        resolve();
      }, 1000);
    });
  }
}
