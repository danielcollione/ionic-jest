import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AdvantagesClubPage } from './advantages-club';

import { AdvantagesClubRoutingModule } from './advantages-club-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, AdvantagesClubRoutingModule],
  declarations: [AdvantagesClubPage],
})
export class AdvantagesClubModule {}
