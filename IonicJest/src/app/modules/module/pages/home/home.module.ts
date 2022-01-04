import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {AppSafeUrl} from "../../../../../pipes/dom-sanitizer/safe-url.pipe";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, AppSafeUrl],
  exports: [AppSafeUrl],
})
export class HomePageModule {}
