import {Component} from '@angular/core';

@Component({
  selector: 'app-my-container',
  template: `
      <app-filter-bar (filtersChanged)="applyFilter($event)"></app-filter-bar>
      <div class="master-detail">
          <app-master [data]="data" (itemSelected)="selectedItem = $event"></app-master>
          <app-details [data]="selectedItem"></app-details>
      </div>
  `,
  styles: ['.master-detail {display: flex}']
})
export class MyContainerComponent {


  private initialData = [
    {title: 'Foo', children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
    {title: 'Bar', children: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]},
    {title: 'FooBar', children: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]},
    {title: 'Baz', children: [30, 31, 32, 33, 34, 35, 36, 37, 38, 39]}
  ];

  data = this.initialData;

  selectedItem: any;

  applyFilter(filterText: string) {
    this.data = this.initialData.filter(item => item.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()));
  }
}
