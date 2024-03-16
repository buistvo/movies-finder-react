import { render, fireEvent } from '@testing-library/react';
import { MovieTile } from '../MovieTile';
import '@testing-library/jest-dom';
import { MOVIE_MOCK } from '../../../mocks/movie';

// Mock movie data
const mockMovie = MOVIE_MOCK;

describe('MovieTile component', () => {
  it('renders movie tile correctly', () => {
    const { getByText, getByAltText } = render(<MovieTile movie={mockMovie} />);

    expect(getByText(mockMovie.name)).toBeInTheDocument();
    expect(getByText(mockMovie.releaseDate.getFullYear())).toBeInTheDocument();
    expect(getByText(mockMovie.genreList.join(','))).toBeInTheDocument(); // Note: There is no space after the comma in the join() method
    expect(getByAltText(mockMovie.name)).toHaveAttribute(
      'src',
      mockMovie.imageUrl
    );
  });

  it('calls onClick handler when clicked on movie image', () => {
    const onClickMock = jest.fn();

    const { getByAltText } = render(
      <MovieTile movie={mockMovie} onClick={onClickMock} />
    );

    fireEvent.click(getByAltText(mockMovie.name));

    expect(onClickMock).toHaveBeenCalled();
    expect(onClickMock).toHaveBeenCalledWith(mockMovie); // Ensure that onClick function is called with correct movie data
  });

  it('calls onEdit handler when Edit option is clicked in context menu', () => {
    const onEditMock = jest.fn();

    const { getByText, getByTestId } = render(
      <MovieTile movie={mockMovie} onEdit={onEditMock} />
    );

    fireEvent.click(getByTestId('ellipsis-button'));

    fireEvent.click(getByText('Edit'));

    expect(onEditMock).toHaveBeenCalled();
    expect(onEditMock).toHaveBeenCalledWith(mockMovie); // Ensure that onEdit function is called with correct movie data
  });

  it('calls onDelete handler when Delete option is clicked in context menu', () => {
    const onDeleteMock = jest.fn();

    const { getByText, getByTestId } = render(
      <MovieTile movie={mockMovie} onDelete={onDeleteMock} />
    );

    fireEvent.click(getByTestId('ellipsis-button'));

    fireEvent.click(getByText('Delete'));

    expect(onDeleteMock).toHaveBeenCalled();
    expect(onDeleteMock).toHaveBeenCalledWith(mockMovie); // Ensure that onDelete function is called with correct movie data
  });
});
