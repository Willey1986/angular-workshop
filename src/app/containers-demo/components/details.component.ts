import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-details',
  template: `
    <h2>Details</h2>
    <pre>{{data | json}}</pre>
  `,
  styles: []
})
export class DetailsComponent {

  @Input() data: any;

}
