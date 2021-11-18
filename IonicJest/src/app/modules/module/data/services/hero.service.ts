import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  readonly URL_GET_HERO_BY_NAME = `${environment.hero_api}/search`;

  constructor(private httpClient: HttpClient) {}

  getHeroByName(name: string): Observable<any> {
    console.log(name);
    return this.httpClient.get<any>(`https://movie-database-imdb-alternative.p.rapidapi.com/`).pipe(tap(console.log));
  }
}
