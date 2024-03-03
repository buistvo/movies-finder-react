import { createUseStyles } from 'react-jss';
import { Movie } from '../../types/movie';
import { useState } from 'react';

interface MovieTileProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
}

const useStyles = createUseStyles({
  container: {},
});

export function MovieTile({ movie, onClick }: MovieTileProps) {
  const [movieState, setMovieState] = useState(movie || {});
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src={movieState.imageUrl}></img>
      <div>
        <span> {movieState.name} </span>
        <span> {movieState.year} </span>
      </div>
      <span> {movieState.genreList.join(',')} </span>
    </div>
  );
}
