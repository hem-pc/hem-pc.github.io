import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validity'
})
export class ValidityPipe implements PipeTransform {
  // Transform month and year into card format
  transform(value: string): string {
    return value && value.length === 7 ? value.substring(0, 3) + value.substring(5) : '/';
  }

}
