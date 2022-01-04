import { Injectable } from '@angular/core';
import { CpfCnpjFormatPipe } from './cpf-cnpj-format.pipe';
import { DocumentTypePipe } from './document-type.pipe';

@Injectable({ providedIn: 'root' })
export class DocumentPipeFacade {
  getDocumentType(document: string) {
    let value = String(document).replace(/\D/g, '');
    const pipe: DocumentTypePipe = new DocumentTypePipe();
    return pipe.transform(value);
  }
  formatDocument(document: string) {
    let value = String(document).replace(/\D/g, '');
    const pipe: CpfCnpjFormatPipe = new CpfCnpjFormatPipe();
    return pipe.transform(value);
  }
}
