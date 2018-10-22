import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisplay'
})
export class BoolDisplayPipe implements PipeTransform {

  transform(value: boolean, args?: any): any {
    return value ? 'Y' : 'N';
  }

}
