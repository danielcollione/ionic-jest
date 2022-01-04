import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'documentType',
})
export class DocumentTypePipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }

    let documento = String(value).replace(/\D/g, '');

    if (documento.length <= 11) {
      return 'CPF';
    } else {
      return 'CNPJ';
    }
  }
}
