import { MovieDetailed } from '../types/movie-detailed';
import { MOVIE_MOCK } from './movie';

export const MOVIE_DETAILED_MOCK: MovieDetailed = {
  ...MOVIE_MOCK,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  duration: '2h 34m',
  rating: 3.5,
};
