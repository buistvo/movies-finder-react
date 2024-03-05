import { Movie } from '../../types/movie';
import { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../Colors';

interface MovieTileProps {
  movie: Movie;
  onClick?: (movie: Movie) => void;
  onEdit?: (movie: Movie) => void;
  onDelete?: (movie: Movie) => void;
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

const ContextMenuContent = styled.div`
  height: 100px;
  width: 200px;
  background-color: ${Colors.Workspace};
  margin: 0.5rem;
`;

const MenuItem = styled.button`
  width: 100%;
  background-color: ${Colors.Workspace};
  color: ${Colors.SecondaryText};
`;

const CloseContextMenuButton = styled.button`
  position: absolute;
  padding: 0;
  background-color: ${Colors.Workspace};
  color: white;
  right: 0;
  margin-right: 1rem;
`;

const MenuItemsWrapper = styled.div`
  padding-top: 2rem;
`;

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
              x
            </CloseContextMenuButton>
            <MenuItemsWrapper>
              <MenuItem onClick={handleEditClick}>Edit</MenuItem>
              <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
            </MenuItemsWrapper>
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