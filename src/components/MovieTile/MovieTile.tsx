import { Movie } from '../../types/movie';
import { useState } from 'react';
import {
  CloseContextMenuButton,
  Container,
  ContextMenu,
  ContextMenuButton,
  ContextMenuContent,
  Ellipsis,
  GenreList,
  MenuItem,
  MovieInfo,
  Title,
  Year,
} from './MovieTile.styled';

interface MovieTileProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
  onEdit?: (movie: Movie) => void;
  onDelete?: (movie: Movie) => void;
}

const StyledEllipsis = () => <Ellipsis>&#x2026;</Ellipsis>;

export function MovieTile({
  movie,
  onClick,
  onDelete,
  onEdit,
}: MovieTileProps) {
  const [movieState, setMovieState] = useState(movie || {});
  const [isContextMenuOpenState, setIsContextMenuOpenState] = useState(false);

  function handleContextMenuClick() {
    setIsContextMenuOpenState(!isContextMenuOpenState);
  }

  function handleEditClick() {
    if (onEdit) onEdit(movieState);
  }

  function handleDeleteClick() {
    if (onDelete) onDelete(movieState);
  }

  function handleMovieClick() {
    if (onClick) onClick(movieState);
    console.log('selected', movie);
  }

  return (
    <Container>
      <ContextMenu>
        {isContextMenuOpenState ? (
          <ContextMenuContent>
            <CloseContextMenuButton onClick={handleContextMenuClick}>
              {'\u2715'}
            </CloseContextMenuButton>
            <div>
              <MenuItem onClick={handleEditClick}>Edit</MenuItem>
              <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
            </div>
          </ContextMenuContent>
        ) : (
          <ContextMenuButton onClick={handleContextMenuClick}>
            <StyledEllipsis></StyledEllipsis>
          </ContextMenuButton>
        )}
      </ContextMenu>

      <img onClick={handleMovieClick} src={movieState.imageUrl}></img>
      <MovieInfo>
        <Title> {movieState.name} </Title>
        <Year> {movieState.year} </Year>
      </MovieInfo>
      <GenreList> {movieState.genreList.join(',')} </GenreList>
    </Container>
  );
}
