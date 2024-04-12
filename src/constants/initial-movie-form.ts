import { Movie } from '../types/movie';

export const INITIAL_MOVIE_FORM_VALUE: Movie = {
  imageUrl: '',
  name: '',
  releaseDate: new Date().toISOString().slice(0, 10),
  genreList: [],
  rating: 0,
  duration: 0,
  description: '',
};
