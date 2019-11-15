import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-master',
  template: `
      <h2>Master</h2>
      <div class="item" *ngFor="let item of data"><a (click)="itemSelected.emit(item)">{{item.title}}</a></div>
  `,
  styles: [
    ':host {background: lightcyan}',
    '.item {cursor: pointer}',
    '.item:hover {background: aqua}'
  ]
})
export class MasterComponent {

  @Input() data: any[] = [];
  @Output() itemSelected = new EventEmitter<any>();

}
