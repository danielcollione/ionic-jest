import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfCnpjFormat',
})
export class CpfCnpjFormatPipe implements PipeTransform {
  transform(value: any): string {
    if (!value) {
      return '';
    }

    let documento = String(value);

    if (documento.length <= 11) {
      documento = documento.padStart(11, '0');
      documento = `${documento.substring(0, 3)}.${documento.substring(3, 6)}.${documento.substring(
        6,
        9,
      )}-${documento.substring(9, 11)}`;
    } else if (documento.length <= 14) {
      documento = documento.padStart(14, '0');
      documento = `${documento.substring(0, 2)}.${documento.substring(2, 5)}.${documento.substring(
        5,
        8,
      )}/${documento.substring(8, 12)}-${documento.substring(12, 14)}`;
    }

    return documento;
  }
}
