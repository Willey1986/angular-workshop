import { Component, OnInit, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-services-demo',
  template: `
    <h2>Services</h2>
    <app-count></app-count>
    <app-count></app-count>
    <app-count></app-count>
  `,
  styles: []
})
export class ServicesDemoComponent { }

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private _count$ = new BehaviorSubject<number>(0);
  get count$() { return this._count$.asObservable(); }

  add() { this._count$.next(this._count$.getValue() + 1); }
}

@Component({
  selector: 'app-count',
  template: `<button (click)="onButtonClick()">{{count$ | async}}</button>`,
  // providers: [CountService]
})
export class CountComponent {

  count$ = this.countService.count$;

  constructor(private countService: CountService) { }

  onButtonClick() { this.countService.add(); }

}
