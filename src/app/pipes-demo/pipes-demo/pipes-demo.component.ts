import {Component, Pipe, PipeTransform} from '@angular/core';
import {isEmpty} from 'lodash';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.scss']
})
export class PipesDemoComponent {

  myArray: string[] = [];

  add() {
    this.myArray.push(new Date().toISOString());
  }

  remove() {
    this.myArray.pop();
  }

}

@Pipe({
  name: 'isEmpty',
  pure: false
})
export class IsEmptyPipe implements PipeTransform {
  transform(value: any, ...args: any[]): boolean {
    return isEmpty(value);
  }
}

@Pipe({
  name: 'negate',
  pure: false
})
export class NegatePipe implements PipeTransform {
  transform(value: boolean): boolean {
    return !value;
  }
}

@Pipe({
  name: 'count',
  pure: false
})
export class CountPipe implements PipeTransform {
  transform(value: any[]): number {
    return value.length;
  }
}
