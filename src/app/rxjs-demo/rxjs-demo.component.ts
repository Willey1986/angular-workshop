import {Component, OnDestroy} from '@angular/core';
import {CallbackService} from './services/callback.service';
import {PromiseService} from './services/promise.service';
import {ObservableService} from './services/observable.service';
import {switchMap} from 'rxjs/operators';
import {Subscription, zip} from 'rxjs';

@Component({
  selector: 'app-rxjs-demo',
  template: `
      <div style="background: aqua; width: 33.33%">
          <h2>Callbacks</h2>
          <button (click)="makeSomeRequestsWithCallbacks()">Make some requests</button>
          <br>
          <button (click)="makeSomeParallelRequestsWithCallbacks()">Make some requestsin parallel</button>
      </div>
      <div style="background: chocolate; width: 33.33%">
          <h2>Promises</h2>
          <button (click)="makeSomeRequestsWithPromises()">Make some requests</button>
          <br>
          <button (click)="makeSomeParallelRequestsWithPromises()">Make some requests in parallel</button>
      </div>
      <div style="background: deeppink; width: 33.33%">
          <h2>Observables</h2>
          <button (click)="makeSomeRequestsWithObservables()">Make some requests</button>
          <br>
          <button (click)="makeSomeParallelRequestsWithObservables()">Make some requests in parallel</button>
          <br>
          <button (click)="cancelRequests()">Cancel running requests</button>
      </div>
  `,
  styles: [':host {display: flex; flex: 1}']
})
export class RxjsDemoComponent implements OnDestroy {

  private subscriptions: Subscription[] = [];
  private someObject = {
    someFunction() {
      console.log('hello from some object');
    }
  };

  constructor(private callbackService: CallbackService,
              private promiseService: PromiseService,
              private observableService: ObservableService) {
  }

  ngOnDestroy(): void {
    this.cancelRequests();
    this.someObject = undefined;
  }

  //#region Callbacks
  makeSomeRequestsWithCallbacks() {
    this.callbackService.makeGetRequest(
      () => this.callbackService.makePostRequest(
        () => this.callbackService.makePutRequest(
          () => this.callbackService.makeGetRequest(
            () => this.callbackService.makePostRequest(
              () => {
                console.log('all requests finished.');
                console.log('Welcome to callback hell!');
                this.someObject.someFunction();
              }
            )
          )
        )
      )
    );
  }

  makeSomeParallelRequestsWithCallbacks() {
    // ?!? HOW ?
    throw Error('HOW?');
  }
  //#endregion

  //#region Promises
  makeSomeRequestsWithPromises() {
    this.promiseService.makeGetRequest()
      .then(this.promiseService.makePostRequest)
      .then(this.promiseService.makePutRequest)
      .then(this.promiseService.makeGetRequest)
      .then(this.promiseService.makePostRequest)
      .then(() => {
        console.log('all requests finished.');
        this.someObject.someFunction();
      });
  }

  makeSomeParallelRequestsWithPromises() {
    Promise.all([
      this.promiseService.makeGetRequest(),
      this.promiseService.makePostRequest(),
      this.promiseService.makePutRequest()])
      .then(() => {
        console.log('Requests executed in parallel');
        this.someObject.someFunction();
      });
  }
  //#endregion

  //#region Observables
  makeSomeRequestsWithObservables() {
    const sub = this.observableService.makeGetRequest().pipe(
      switchMap(() => this.observableService.makePostRequest()),
      switchMap(() => this.observableService.makePutRequest()),
      switchMap(() => this.observableService.makeGetRequest()),
      switchMap(() => this.observableService.makePostRequest()),
    ).subscribe(() => {
      console.log('Requests executed in parallel');
      this.someObject.someFunction();
    });

    this.subscriptions.push(sub);
  }

  makeSomeParallelRequestsWithObservables() {
    const sub = zip(
      this.observableService.makeGetRequest(),
      this.observableService.makePostRequest(),
      this.observableService.makePutRequest(),
    ).subscribe(() => {
      console.log('Requests executed in parallel');
      this.someObject.someFunction();
    });

    this.subscriptions.push(sub);
  }

  cancelRequests() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe();
    }
  }
  //#endregion
}
