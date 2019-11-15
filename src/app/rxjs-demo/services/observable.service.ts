import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  constructor() {
  }

  makeGetRequest() {
    console.log('making GET request');
    return of(undefined).pipe(
      delay(1000),
      tap(() => console.log('Request successful'))
    );
  }

  makePostRequest() {
    console.log('making POST request');
    return of(undefined).pipe(
      delay(1000),
      tap(() => console.log('Request successful'))
    );
  }

  makePutRequest() {
    console.log('making PUT request');
    return of(undefined).pipe(
      delay(1000),
      tap(() => console.log('Request successful'))
    );
  }
}
