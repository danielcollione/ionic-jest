import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, pluck, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}

  getHeroByName(name: string): Observable<any> {
    console.log(name);
    const options = new HttpParams()
      .set('nameStartsWith', name)
      .set('limit', `${environment.settings.charactersLimit}`);

    return this.httpClient
      .get<any>(`${environment.apiUrl}characters`, { params: options })
      .pipe(
        tap(valor => console.log(valor.data)),
        pluck('data'),
        map(data => data),
        catchError(this.handleError)
      );
  }

  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Throw it so that it can be handled by the global application error handler.
      throw error;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(error);
    }
    // return an ErrorObservable with a user-facing error message
    return throwError(error);
  };
}
