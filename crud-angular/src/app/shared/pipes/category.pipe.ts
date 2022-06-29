import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string ): string {
    switch(value) {
      case 'front-end': return 'code';
      case 'back-end': return 'computer';
    }
    return 'code';
  }

}
