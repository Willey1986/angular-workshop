import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  template: `
    <input type="text" (input)="filtersChanged.emit($event.target.value)">
  `,
  styles: []
})
export class FilterBarComponent {

  @Output() filtersChanged = new EventEmitter<string>();

}
