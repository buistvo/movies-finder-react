import { render, screen, fireEvent } from '@testing-library/react';
import { GenreSelect } from '../GenreSelect';
import '@testing-library/jest-dom';
import { GENRE_LIST_MOCK } from '../../../mocks/genre-list';

describe('GenreSelect component', () => {
  const genreList = GENRE_LIST_MOCK;

  it('renders all genres passed in props', () => {
    render(<GenreSelect genreList={genreList} onSelect={() => {}} />);
    genreList.forEach((genre) => {
      const genreButton = screen.getByText(genre);
      expect(genreButton).toBeInTheDocument();
    });
  });

  it('highlights a selected genre passed in props', () => {
    const initialSelectedGenre = genreList[1];
    render(
      <GenreSelect
        genreList={genreList}
        initialSelectedGenre={initialSelectedGenre}
        onSelect={() => {}}
      />
    );
    const selectedGenreButton = screen.getByText(initialSelectedGenre);
    expect(selectedGenreButton).toHaveClass('selected');
  });

  it('after a click event on a genre button component calls "onChange" callback and passes correct genre in arguments', () => {
    const mockOnSelect = jest.fn();

    render(<GenreSelect genreList={genreList} onSelect={mockOnSelect} />);
    const genreToSelect = genreList[2];
    const genreButton = screen.getByText(genreToSelect);
    fireEvent.click(genreButton);
    expect(mockOnSelect).toHaveBeenCalledWith(genreToSelect);
  });
});
