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
import { Link, useLocation } from 'react-router-dom';
import { getFullYear } from '../../helpers/dates-helper';
interface MovieTileProps {
  movie: Movie;
  onEdit?: (movie: Movie) => void;
  onDelete?: (movie: Movie) => void;
}

const StyledEllipsis = () => <Ellipsis>&#x2026;</Ellipsis>;

export function MovieTile({ movie, onDelete, onEdit }: MovieTileProps) {
  const [isContextMenuOpenState, setIsContextMenuOpenState] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const linkUrl = `/${movie.id}?${searchParams.toString()}`;

  function handleContextMenuClick() {
    setIsContextMenuOpenState(!isContextMenuOpenState);
  }

  function handleEditClick() {
    if (onEdit) onEdit(movie);
  }

  function handleDeleteClick() {
    if (onDelete) onDelete(movie);
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
      <Link to={linkUrl}>
        {' '}
        <MovieImage alt={movie.name} src={movie.imageUrl} />
      </Link>

      <MovieInfo>
        <Title> {movie.name} </Title>
        <Year> {getFullYear(movie.releaseDate).toString()} </Year>
      </MovieInfo>
      <GenreList> {movie.genreList.join(', ')} </GenreList>
    </Container>
  );
}
