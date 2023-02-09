import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "flying"
})
export class FlyingPipe implements PipeTransform{
  transform(value: boolean ): string {
    return value ? "Si" : "No";
  }

}