export interface SearchResponse {
  Response: string;
  Search: SearchResponseMovie[];
  totalResults: string;
}

export interface SearchResponseMovie {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
  Actors: string;
}

export interface MovieResponse {
  imdbID: string;
  Title: string;
  Type: string;
  Year: string;
  Poster: string;
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Production: string;
  Rated: string;
  Ratings: MovieResponseRating[];
  Released: string;
  Response: string;
  Runtime: string;
  Website: string;
  writer: string;
  imdbRating: string;
  imdbVotes: string;
}

export interface MovieResponseRating {
  Source: string;
  Value: string;
}
