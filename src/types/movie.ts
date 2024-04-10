export interface Movie {
  id: number | null;
  imageUrl: string;
  name: string;
  releaseDate: string;
  genreList: string[];
  rating: number | null;
  duration: number;
  description: string;
}

export type MovieFormFields = Partial<Movie>;
