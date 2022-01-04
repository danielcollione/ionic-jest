import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvantagesClubPage } from './advantages-club';

const routes: Routes = [
  {
    path: '',
    component: AdvantagesClubPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvantagesClubRoutingModule {}
