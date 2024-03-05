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
  position: relative;
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

const ContextMenu = styled.div`
  position: absolute;
  right: 0;
`;

const ContextMenuButton = styled.button`
  border-radius: 40px;
  width: 40px;
  height: 40px;
  margin: 0.5rem;
  background-color: ${Colors.Workspace};
`;

const Ellipsis = styled.span`
  position: absolute;
  top: 50%;
  right: 18px;
  transform: translateY(-50%);
  color: white;
  writing-mode: vertical-lr;
  font-size: 2em;
  width: 20px;
`;

const StyledEllipsis = () => <Ellipsis>&#x2026;</Ellipsis>;

export function MovieTile({ movie, onClick }: MovieTileProps) {
  const [movieState, setMovieState] = useState(movie || {});
  const [isContextMenuOpenState, setIsContextMenuOpenState] = useState(false);

  function onContextMenuClick() {
    setIsContextMenuOpenState(true);
  }

  return (
    <Container>
      <ContextMenu>
        {isContextMenuOpenState ? (
          <div>context menu</div>
        ) : (
          <ContextMenuButton onClick={onContextMenuClick}>
            <StyledEllipsis></StyledEllipsis>
          </ContextMenuButton>
        )}
      </ContextMenu>

      <img src={movieState.imageUrl}></img>
      <MovieInfo>
        <Title> {movieState.name} </Title>
        <Year> {movieState.year} </Year>
      </MovieInfo>
      <GenreList> {movieState.genreList.join(',')} </GenreList>
    </Container>
  );
}
