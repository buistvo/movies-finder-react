import axios, { CancelTokenSource } from 'axios';
import { MovieQueryParams, MoviesResponse } from '../types/movies-response';
import { PaginatedResponse } from '../types/paginated-response';
import { Movie } from '../types/movie';

export class MoviesService {
  async getAll(
    params?: MovieQueryParams,
    cancellationToken?: CancelTokenSource
  ): Promise<PaginatedResponse<Movie[]>> {
    const response = await axios.get<PaginatedResponse<MoviesResponse[]>>(
      'http://localhost:4000/movies',
      {
        cancelToken: cancellationToken?.token,
        params,
      }
    );
    return {
      ...response.data,
      data: response.data.data.map((movie) => this.mapResponse(movie)),
    };
  }

  async getById(
    id: string,
    cancellationToken?: CancelTokenSource
  ): Promise<Movie> {
    const response = await axios.get<MoviesResponse>(
      `http://localhost:4000/movies/${id}`,
      {
        cancelToken: cancellationToken?.token,
      }
    );
    return this.mapResponse(response.data);
  }

  mapResponse(response: MoviesResponse): Movie {
    return {
      id: response.id,
      imageUrl: response.poster_path,
      name: response.title,
      releaseDate: new Date(response.release_date),
      genreList: response.genres,
      rating: response.vote_average,
      duration: response.runtime,
      description: response.overview,
    };
  }
}
