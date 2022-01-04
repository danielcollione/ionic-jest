import { Pipe, PipeTransform } from '@angular/core';
import { StringCase } from 'src/app/utils/string-case/string-case';

@Pipe({
  name: 'appcapitalize',
})
export class AppCapitalizePipe implements PipeTransform {
  transform(value: any): string {
    return StringCase.capitalize(value);
  }
}
