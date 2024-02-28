import { useState } from 'react';
import './GenreSelect.css';

interface InitialProps {
  genreList: string[];
  initialSelectedGenre?: string;
  onSelect: (genre: string) => void;
}

export function GenreSelect({
  genreList,
  initialSelectedGenre,
  onSelect,
}: InitialProps) {
  const [selectedGenre, setSelectedGenre] = useState(
    initialSelectedGenre || genreList[0]
  );

  function handleGenreButtonClick(genre: string) {
    setSelectedGenre(genre);
    onSelect(genre);
  }

  return (
    <div className="genre-list">
      {genreList.map((genre) => (
        <button
          key={genre}
          className={selectedGenre === genre ? 'selected' : ''}
          onClick={() => handleGenreButtonClick(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
