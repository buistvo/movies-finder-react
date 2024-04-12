export interface MoviesResponse {
  budget?: number;
  genres: string[];
  id?: number | null;
  overview: string;
  poster_path: string;
  release_date: string;
  revenue?: number;
  runtime: number;
  tagline?: string;
  title: string;
  vote_average: number;
  vote_count?: number;
}

export interface MovieQueryParams {
  sortBy?: keyof MoviesResponse | null;
  sortOrder?: 'asc' | 'desc' | null;
  search?: string | null;
  searchBy?: 'title' | 'genres' | null;
  filter?: string | null;
}
