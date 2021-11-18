import { Component } from '@angular/core';
import { HeroService } from '../../data/services/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchName: string;
  constructor(private hero: HeroService) {
    this.search();
  }

  search() {
    this.hero.getHeroByName('hulk').subscribe();
  }
}
