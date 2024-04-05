import { useState } from 'react';
import './GenreSelect.css';
import { DropdownOption } from '../MovieForm/MovieForm';

interface InitialProps {
  genreList: DropdownOption[];
  initialSelectedGenre?: string;
  onSelect: (genre: string) => void;
}

export function GenreSelect({
  genreList,
  initialSelectedGenre,
  onSelect,
}: InitialProps) {
  const [selectedGenre, setSelectedGenre] = useState(
    initialSelectedGenre || genreList[0].value
  );

  function handleGenreButtonClick(genre: string) {
    setSelectedGenre(genre);
    onSelect(genre);
  }

  return (
    <div className="genre-list">
      {genreList.map((genre) => (
        <button
          data-testid={genre.value}
          key={genre.value}
          className={
            selectedGenre.toLowerCase() === genre.value.toLowerCase()
              ? 'selected'
              : ''
          }
          onClick={() => handleGenreButtonClick(genre.value)}
        >
          {genre.label}
        </button>
      ))}
    </div>
  );
}
