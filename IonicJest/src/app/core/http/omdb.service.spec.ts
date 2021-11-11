import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Movie } from '../model/movie.model';

import { OMDbService } from './omdb.service';

describe('OMDbService', () => {
  let service: OMDbService;
  const movie = {
    id: 'tt0848228',
    title: 'The Avengers',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(OMDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should find movie by id', (done: DoneFn) => {
    service.getMovie(movie.id).subscribe((movieFromService: Movie) => {
      expect(movieFromService.id).toEqual(movie.id);
      expect(movieFromService.title).toEqual(movie.title);
      done();
    });
  });

  it('should find a list of movies using the title', (done: DoneFn) => {
    service.searchMovies(movie.title).subscribe((movies: Movie[]) => {
      expect(movies).toBeInstanceOf(Array);
      expect(movies.length).toBeGreaterThanOrEqual(5);

      expect(
        movies.find(
          (movieFromService: Movie) =>
            movieFromService.id === movie.id &&
            movieFromService.title === movie.title
        )
      ).toBeDefined();

      done();
    });
  });
});
