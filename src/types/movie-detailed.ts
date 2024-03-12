import { Movie } from './movie';

export interface MovieDetailed extends Movie {
  rating: number;
  duration: string;
  description: string;
}
