import {Component} from '@angular/core';
import {combineLatest, interval, merge, race, zip} from 'rxjs';
import {concatMap, exhaustMap, filter, finalize, first, flatMap, map, switchMap, take, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-demo2',
  template: `
      <div>
          <h2>Basic operators</h2>
          <button (click)="execMap()">map</button>
          <button (click)="execFilter()">filter</button>
          <button (click)="execFirst()">first</button>
          <button (click)="execFirstDividableBy3()">first (dividable by 3)</button>
      </div>
      <div>
          <h2>flatMap | switchMap | exhaustMap | concatMap</h2>
          <button (click)="execFlatMap()">flatMap</button>
          <button (click)="execSwitchMap()">switchMap</button>
          <button (click)="execExhaustMap()">exhaustMap</button>
          <button (click)="execConcatMap()">concatMap</button>
      </div>
      <div>
          <h2>Combination</h2>
          <button (click)="execZip()">zip</button>
          <button (click)="execCombineLatest()">combineLatest</button>
          <button (click)="execWithLatestFrom()">withLatestFrom</button>
          <button (click)="execMerge()">merge</button>
      </div>
  `,
  styles: []
})
export class RxjsDemo2Component {

  private observable1$ = interval(500).pipe(
    take(5),
    map(i => `[Observable 1] ${i}`)
  );

  private observable2$ = interval(500).pipe(
    take(5),
    map(i => `[Observable 2] ${i}`),
    finalize(() => console.log('OBSERVABLE 2 END'))
  );

  private observable3$ = interval(50).pipe(
    take(100)
  );

  //#region Basic Operators
  execMap() {
    interval(500).pipe(
      take(5),
      map(i => i * i)
    ).subscribe(console.log);
  }

  execFilter() {
    interval(500).pipe(
      take(5),
      filter(i => i > 2)
    ).subscribe(console.log);
  }

  execFirst() {
    interval(500).pipe(
      take(5),
      first()
    ).subscribe(console.log);
  }

  execFirstDividableBy3() {
    interval(500).pipe(
      take(5),
      first(element => element > 0 && element % 3 === 0)
    ).subscribe(console.log);
  }
  //#endregion

  //#region flatMap etc.
  execFlatMap() {
    this.observable1$.pipe(
      flatMap(() => this.observable2$)
    ).subscribe(console.log);
  }

  execSwitchMap() {
    this.observable1$.pipe(
      switchMap(() => this.observable2$)
    ).subscribe(console.log);
  }

  execExhaustMap() {
    this.observable1$.pipe(
      exhaustMap(() => this.observable2$)
    ).subscribe(console.log);
  }

  execConcatMap() {
    this.observable1$.pipe(
      concatMap(() => this.observable2$)
    ).subscribe(console.log);
  }
  //#endregion

  //#region Combination
  execZip() {
    zip(this.observable1$, this.observable3$).subscribe(console.log);
  }

  execCombineLatest() {
    combineLatest(this.observable1$, this.observable3$).subscribe(console.log);
  }

  execWithLatestFrom() {
    this.observable1$.pipe(
      withLatestFrom(this.observable3$)
    ).subscribe(console.log);
  }

  execMerge() {
   merge(this.observable1$, this.observable3$).subscribe(console.log);
  }
  //#endregion
}
