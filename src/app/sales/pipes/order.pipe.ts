import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Hero[], orderBy: string = "void"): Hero[] {

    switch (orderBy) {
      case "name":
        return value.sort((a, b) => (a.name > b.name) ? 1 : -1 );
      case "flying":
        return value.sort((a, b) => (a.flying > b.flying) ? -1 : 1 );
      case "color":
        return value.sort((a, b) => (a.color > b.color) ? 1 : -1 );
      default:
        return value;
    }

  }

}
