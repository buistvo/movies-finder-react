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
import { MovieImage } from '../../App.styled';

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
  const [isContextMenuOpenState, setIsContextMenuOpenState] = useState(false);

  function handleContextMenuClick() {
    setIsContextMenuOpenState(!isContextMenuOpenState);
  }

  function handleEditClick() {
    if (onEdit) onEdit(movie);
  }

  function handleDeleteClick() {
    if (onDelete) onDelete(movie);
  }

  function handleMovieClick() {
    if (onClick) onClick(movie);
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
          <ContextMenuButton
            data-testid="ellipsis-button"
            onClick={handleContextMenuClick}
          >
            <StyledEllipsis></StyledEllipsis>
          </ContextMenuButton>
        )}
      </ContextMenu>

      <MovieImage
        alt={movie.name}
        onClick={handleMovieClick}
        src={movie.imageUrl}
      />
      <MovieInfo>
        <Title> {movie.name} </Title>
        <Year> {movie.releaseDate.getFullYear()} </Year>
      </MovieInfo>
      <GenreList> {movie.genreList.join(',')} </GenreList>
    </Container>
  );
}
