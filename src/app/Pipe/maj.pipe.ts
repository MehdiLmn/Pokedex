import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ttc'
})
export class MajPipe implements PipeTransform {

  transform(value: number, taux:number): number {

    //let taux = 0.20;
    return value * taux + value;
  }

}
