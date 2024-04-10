import { render, fireEvent } from '@testing-library/react';
import { MovieTile } from '../MovieTile';
import '@testing-library/jest-dom';
import { MOVIE_MOCK } from '../../../mocks/movie';
import { MemoryRouter, useLocation } from 'react-router-dom';
import { getFullYear } from '../../../helpers/dates-helper';

// Mock movie data
const mockMovie = MOVIE_MOCK;

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('MovieTile component', () => {
  beforeEach(() => {
    (useLocation as jest.Mock).mockReturnValue({
      search: '?param1=value1&param2=value2',
    });
  });
  it('renders movie tile correctly', () => {
    const { getByText, getByAltText } = render(
      <MemoryRouter>
        <MovieTile movie={mockMovie} />
      </MemoryRouter>
    );

    expect(getByText(mockMovie.name)).toBeInTheDocument();
    expect(
      getByText(getFullYear(mockMovie.releaseDate).toString())
    ).toBeInTheDocument();
    expect(getByText(mockMovie.genreList.join(', '))).toBeInTheDocument(); // Note: There is no space after the comma in the join() method
    expect(getByAltText(mockMovie.name)).toHaveAttribute(
      'src',
      mockMovie.imageUrl
    );
  });

  it('calls onEdit handler when Edit option is clicked in context menu', () => {
    const onEditMock = jest.fn();

    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <MovieTile movie={mockMovie} onEdit={onEditMock} />
      </MemoryRouter>
    );

    fireEvent.click(getByTestId('ellipsis-button'));

    fireEvent.click(getByText('Edit'));

    expect(onEditMock).toHaveBeenCalled();
    expect(onEditMock).toHaveBeenCalledWith(mockMovie); // Ensure that onEdit function is called with correct movie data
  });

  it('calls onDelete handler when Delete option is clicked in context menu', () => {
    const onDeleteMock = jest.fn();

    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <MovieTile movie={mockMovie} onDelete={onDeleteMock} />
      </MemoryRouter>
    );

    fireEvent.click(getByTestId('ellipsis-button'));

    fireEvent.click(getByText('Delete'));

    expect(onDeleteMock).toHaveBeenCalled();
    expect(onDeleteMock).toHaveBeenCalledWith(mockMovie); // Ensure that onDelete function is called with correct movie data
  });
});
