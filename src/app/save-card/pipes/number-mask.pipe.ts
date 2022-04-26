import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberMask'
})
export class NumberMaskPipe implements PipeTransform {
  // Add - after every 4 characters
  transform(value: string): string {
    let val = value
    let parts = val.match(/.{1,4}/g);
    let newValue = parts?.join(" - ")
    return newValue || value;
  }

}
