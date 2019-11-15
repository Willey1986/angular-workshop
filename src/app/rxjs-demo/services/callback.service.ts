import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallbackService {

  constructor() { }

  makeGetRequest(callback: () => void) {
    console.log('making GET request');
    setTimeout(() => {
      console.log('Request successful');
      callback();
    }, 1000);
  }

  makePostRequest(callback: () => void) {
    console.log('making POST request');
    setTimeout(() => {
      console.log('Request successful');
      callback();
    }, 1000);
  }

  makePutRequest(callback: () => void) {
    console.log('making PUT request');
    setTimeout(() => {
      console.log('Request successful');
      callback();
    }, 1000);
  }
}
