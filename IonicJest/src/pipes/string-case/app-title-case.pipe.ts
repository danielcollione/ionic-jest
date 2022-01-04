import { Pipe, PipeTransform } from '@angular/core';
import { StringCase } from 'src/app/utils/string-case/string-case';

@Pipe({
  name: 'apptitlecase',
})
export class AppTitleCasePipe implements PipeTransform {
  transform(value: any): string {
    return StringCase.titleCase(value);
  }
}
