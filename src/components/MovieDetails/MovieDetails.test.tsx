import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MovieDetails } from './MovieDetails';

const mockMovie = {
  name: 'Movie Title',
  rating: 7.5,
  genreList: ['Action', 'Adventure'],
  year: '2022',
  duration: '2h 30min',
  description: 'This is a test movie description.',
  imageUrl: 'https://example.com/image.jpg',
};

describe('MovieDetails component', () => {
  it('renders movie details correctly', () => {
    const { getByText, getByAltText } = render(
      <MovieDetails movie={mockMovie} />
    );

    expect(getByText('Movie Title')).toBeInTheDocument();
    expect(getByText('7.5')).toBeInTheDocument();
    expect(getByText('Action, Adventure')).toBeInTheDocument();
    expect(getByText('2022')).toBeInTheDocument();
    expect(getByText('2h 30min')).toBeInTheDocument();
    expect(getByText('This is a test movie description.')).toBeInTheDocument();

    const movieImage = getByAltText(mockMovie.name); // Use movie name as alt text
    expect(movieImage).toBeInTheDocument();
    expect(movieImage).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
