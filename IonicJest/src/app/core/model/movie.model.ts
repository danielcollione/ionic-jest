export interface Movie {
  id: string;
  title: string;
  type: string;
  year: string;
  poster: string;
  actors?: string;
  awards?: string;
  boxOffice?: string;
  country?: string;
  director?: string;
  genre?: string;
  language?: string;
  plot?: string;
  production?: string;
  ratings?: MovieRating[];
  released?: string;
  runtime?: string;
  writer?: string;
  imdbRating?: number;
  imdbVotes?: string;
}

export interface MovieRating {
  source: string;
  value: string;
}
