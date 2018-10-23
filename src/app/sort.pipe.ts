import { Pipe, PipeTransform } from '@angular/core';

import { User } from './user/user.class';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(users: User[], sortBy?: string): any {
    const field = (sortBy != null) ? sortBy : 'LastName';
    console.log('Users:', users, ', sortBy:', field);
    return users.sort(compareFn);

    function compareFn(a: User, b: User) {
      if (b[field] === a[field]) {
        return 0;
      }
      return (a[field] > b[field]) ? 1 : -1;
    }
  }

}
