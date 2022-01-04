import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
})
export class AppSafeUrl implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: any): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
