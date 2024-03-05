import { Movie } from '../../types/movie';
import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../Colors';

interface MovieTileProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
}

const Container = styled.div`
  display: block;
  width: fit-content;
  height: fit-content;
  color: ${Colors.SecondaryText};
`;

const MovieInfo = styled.div`
  display: flex;
`;

const Title = styled.span`
  text-align: start;
  width: 80%;
  font-weight: 700;
`;

const Year = styled.span`
  text-align: center;
  border: 1px solid ${Colors.Background};
  border-radius: 5px;
  width: 20%;
`;

const GenreList = styled.div`
  text-align: start;
  font-size: 0.9rem;
  font-weight: 500;
`;
export function MovieTile({ movie, onClick }: MovieTileProps) {
  const [movieState, setMovieState] = useState(movie || {});

  return (
    <Container>
      <img src={movieState.imageUrl}></img>
      <MovieInfo>
        <Title> {movieState.name} </Title>
        <Year> {movieState.year} </Year>
      </MovieInfo>
      <GenreList> {movieState.genreList.join(',')} </GenreList>
    </Container>
  );
}
