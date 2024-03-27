import { render, screen, fireEvent } from '@testing-library/react';
import { GenreSelect } from '../GenreSelect';
import '@testing-library/jest-dom';
import { GENRE_LIST_OPTIONS } from '../../../constants/genre-list-options';

describe('GenreSelect component', () => {
  const genreList = GENRE_LIST_OPTIONS;

  it('renders all genres passed in props', () => {
    render(<GenreSelect genreList={genreList} onSelect={() => {}} />);
    genreList.forEach((genre) => {
      const genreButton = screen.getByText(genre.label);
      expect(genreButton).toBeInTheDocument();
    });
  });

  it('highlights a selected genre passed in props', () => {
    const initialSelectedGenre = genreList[1];
    render(
      <GenreSelect
        genreList={genreList}
        initialSelectedGenre={initialSelectedGenre.value}
        onSelect={() => {}}
      />
    );
    const selectedGenreButton = screen.getByText(initialSelectedGenre.label);
    expect(selectedGenreButton).toHaveClass('selected');
  });

  it('after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    const mockOnSelect = jest.fn();

    render(<GenreSelect genreList={genreList} onSelect={mockOnSelect} />);
    const genreToSelect = genreList[2];
    const genreButton = screen.getByText(genreToSelect.label);
    fireEvent.click(genreButton);
    expect(mockOnSelect).toHaveBeenCalledWith(genreToSelect.value);
  });
});
