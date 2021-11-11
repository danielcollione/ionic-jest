import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../model/movie.model';
import { map } from 'rxjs/operators';
import {
  MovieResponse,
  MovieResponseRating,
  SearchResponse,
  SearchResponseMovie,
} from '../model/omdb.response.model';

const API = environment.ombd.api;
const API_KEY = environment.ombd.key;

@Injectable({
  providedIn: 'root',
})
export class OMDbService {
  constructor(private http: HttpClient) {}

  searchMovies(title: string): Observable<Movie[]> {
    return this.http
      .get<SearchResponse>(`${API}?apikey=${API_KEY}&s=${title}`)
      .pipe(
        map((response: SearchResponse) =>
          response.Search.map((movie: SearchResponseMovie) => {
            return {
              id: movie.imdbID,
              title: movie.Title,
              type: movie.Type,
              year: movie.Year,
              poster: movie.Poster,
            };
          })
        )
      );
  }

  getMovie(id: string): Observable<Movie> {
    return this.http
      .get<MovieResponse>(`${API}?apikey=${API_KEY}&i=${id}`)
      .pipe(
        map((response: MovieResponse) => {
          return {
            id: response.imdbID,
            title: response.Title,
            type: response.Type,
            year: response.Year,
            poster: response.Poster,
            actors: response.Actors,
            awards: response.Awards,
            boxOffice: response.BoxOffice,
            country: response.Country,
            director: response.Director,
            genre: response.Genre,
            language: response.Language,
            plot: response.Plot,
            production: response.Production,
            ratings: response.Ratings.map((rating: MovieResponseRating) => {
              return {
                source: rating.Source,
                value: rating.Value,
              };
            }),
            released: response.Released,
            runtime: response.Runtime,
            writer: response.writer,
            imdbRating: parseFloat(response.imdbRating),
            imdbVotes: response.imdbVotes,
          };
        })
      );
  }
}
