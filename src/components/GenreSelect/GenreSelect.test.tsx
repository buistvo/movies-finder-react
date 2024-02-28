import { render } from '@testing-library/react';
import { GenreSelect } from './GenreSelect';
import '@testing-library/jest-dom';
const GENRE_LIST = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

describe('GenreSelect', () => {
  it('should return true', () => {
    render(
      <GenreSelect genreList={GENRE_LIST} onSelect={(e) => console.log(e)} />
    );
    expect(true).toBe(true);
  });
});
