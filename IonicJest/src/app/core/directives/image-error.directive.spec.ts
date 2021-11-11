import { DebugElement } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import player from 'lottie-web';
import { By } from '@angular/platform-browser';
import { LottieModule } from 'ngx-lottie';
import { LottiePlayerComponent } from 'src/app/features/movies/components/lottie-player/lottie-player.component';
import { MovieDetailsComponent } from 'src/app/features/movies/components/movie-details/movie-details.component';
import { Movie } from '../model/movie.model';
import { ImageErrorDirective } from './image-error.directive';
import { IonicModule } from '@ionic/angular';

describe('ImageErrorDirective', () => {
  let directive: ImageErrorDirective;
  let fixture: ComponentFixture<MovieDetailsComponent>;
  let element: DebugElement;
  const movie: Movie = {
    poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
    title: 'The Avengers',
    type: 'movie',
    year: '2012',
    id: 'tt0848228',
  };

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        MovieDetailsComponent,
        ImageErrorDirective,
        LottiePlayerComponent,
      ],
      imports: [
        IonicModule,
        LottieModule.forRoot({
          player: () => {
            return player;
          },
        }),
      ],
    }).createComponent(MovieDetailsComponent);
    fixture.componentInstance.movie = movie;
    fixture.detectChanges();
    element = fixture.debugElement.query(By.directive(ImageErrorDirective));

    directive = new ImageErrorDirective(element);
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should change src to default image on error', fakeAsync(() => {
    expect(element.nativeElement.src).not.toContain(
      'assets/images/default.jpg'
    );
    tick();
    element.nativeElement.dispatchEvent(new Event('error'));
    tick();
    expect(element.nativeElement.src).toContain('assets/images/default.jpg');
  }));
});
