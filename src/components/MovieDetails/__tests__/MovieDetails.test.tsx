import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieDetails } from '../MovieDetails';
import { MOVIE_DETAILED_MOCK } from '../../../mocks/movie-detailed';

const mockMovie = MOVIE_DETAILED_MOCK;

describe('MovieDetails component', () => {
  it('renders movie details correctly', () => {
    const { getByText, getByAltText } = render(
      <MovieDetails movie={mockMovie} />
    );

    expect(getByText(mockMovie.name)).toBeInTheDocument();
    expect(getByText(mockMovie.rating)).toBeInTheDocument();
    expect(getByText(mockMovie.genreList.join(', '))).toBeInTheDocument();
    expect(getByText(mockMovie.year)).toBeInTheDocument();
    expect(getByText(mockMovie.duration)).toBeInTheDocument();
    expect(getByText(mockMovie.description)).toBeInTheDocument();

    const movieImage = getByAltText(mockMovie.name);
    expect(movieImage).toBeInTheDocument();
    expect(movieImage).toHaveAttribute('src', mockMovie.imageUrl);
  });
});
