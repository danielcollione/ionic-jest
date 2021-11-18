import { Component } from '@angular/core';
import { HeroService } from '../../data/services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchName: string;
  constructor(private heroService: HeroService) {
    this.search();
  }

  search() {
    this.heroService.getHeroByName(`hulk`).subscribe();
    console.log(this.searchName);
  }
}
