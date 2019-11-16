import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filterbar',
  template: `
    <input [value]="searchTerm" (input)="this.searchTermChange.emit($event.target.value)">
  `,
  styles: []
})
export class FilterbarComponent {

  @Input() searchTerm: string;
  @Output() searchTermChange = new EventEmitter<string>();

}
