import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "mayus"
})
export class MayusPipe implements PipeTransform{
  
  transform(value: string, isMayus: boolean = true): string {
    return (isMayus) ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }

}