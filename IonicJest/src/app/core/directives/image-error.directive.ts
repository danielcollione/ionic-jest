import {
  Directive,
  ElementRef,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appImageError]',
})
export class ImageErrorDirective {
  @Input() appImageError: string = '';

  constructor(private elementRef: ElementRef) {}

  @HostListener('error') onError() {
    this.setDefaultImage();
  }

  setDefaultImage() {
    this.elementRef.nativeElement.setAttribute(
      'src',
      this.appImageError.length > 0
        ? this.appImageError
        : 'assets/images/default.jpg'
    );
  }
}
