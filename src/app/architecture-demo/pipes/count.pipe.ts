import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'count'
})
export class CountPipe implements PipeTransform {

  transform(value: any[]): number {
    if (!value) {
      return 0;
    }
    return value.length;
  }

}
