import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OMDbService } from './http/omdb.service';
import { ImageErrorDirective } from './directives/image-error.directive';

@NgModule({
  declarations: [ImageErrorDirective],
  imports: [CommonModule, HttpClientModule],
  exports: [ImageErrorDirective],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [OMDbService],
    };
  }
}
