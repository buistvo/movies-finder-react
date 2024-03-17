import styled from 'styled-components';
import { GENRE_LIST } from '../../constants/genre-list-options';
import { MOVIE_MOCK } from '../../mocks/movie';
import { GenreSelect } from '../GenreSelect/GenreSelect';
import { MovieTile } from '../MovieTile/MovieTile';
import { SortControl } from '../SortControl/SortControl';
import {
  MoviesContainer,
  DetailsHeader,
  DetailsContainer,
} from './MovieListPage.styled';
import { Dialog, DialogProps } from '../Dialog/Dialog';
import { ButtonRed } from '../../App.styled';
import { Movie } from '../../types/movie';
import { DialogContent, ConfirmButton } from '../Dialog/Dialog.styled';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { MovieForm } from '../MovieForm/MovieForm';
import { SearchForm } from '../SearchForm/SearchForm';
import { useState } from 'react';
import { Colors } from '../../Colors';

const MovieListPageContainer = styled.div``;
const TopContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  background: no-repeat center center;
  background-image: url('images/literally-me.jpg');
  background-repeat: repeat;
  background-position: top;
  background-repeat: repeat;
  background-size: cover;
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    pointer-events: none;
    top: 0;
    left: 0;
  }
`;

const SearchMovieContent = styled.div`
  position: relative;
  z-index: 1;
`;

const TopContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding-top: 1rem;
  padding-right: 2rem;
  padding-left: 2rem;
`;

const Logo = styled.div`
  color: ${Colors.PrimaryRed};
  font-size: 1.1em;
  :first-child {
    font-weight: 1000;
  }
`;

const AddMovieButton = styled.button`
  background-color: ${Colors.Background}AA;
  color: ${Colors.PrimaryRed};
  &:hover {
    background-color: ${Colors.Workspace}BB;
  }
`;

export function MovieListPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState<DialogProps>({
    children: null,
    title: '',
  });

  function toggleDialog(isOpen: boolean) {
    setShowDialog(isOpen);
  }

  function handleMovieEdit(movie: Movie) {
    setDialogContent({
      title: 'EDIT MOVIE',
      children: (
        <MovieForm
          movie={movie}
          onSubmit={(mov) => {
            console.log(mov);
            setShowDialog(false);
          }}
        ></MovieForm>
      ),
    });
    setShowDialog(true);
  }

  function handleMovieDeleteClick(movie: Movie) {
    setDialogContent({
      title: 'DELETE MOVIE',
      children: (
        <DialogContent>
          <span>Are you sure you want to delete this movie?</span>
          <ConfirmButton onClick={() => handleConfirmMovieDelete(movie)}>
            CONFIRM
          </ConfirmButton>
        </DialogContent>
      ),
    });
    setShowDialog(true);
  }

  function handleConfirmMovieDelete(movie: Movie) {
    toggleDialog(false);
    console.log('delete', movie);
  }

  function handleAddMovie() {
    setDialogContent({
      title: 'EDIT MOVIE',
      children: (
        <MovieForm
          onSubmit={(mov) => {
            console.log(mov);
            setShowDialog(false);
          }}
        ></MovieForm>
      ),
    });
    setShowDialog(true);
  }
  return (
    <MovieListPageContainer>
      <TopContainer>
        <TopContainerHeader>
          <Logo>
            <span>netflix</span>
            <span>roulette</span>
          </Logo>
          <AddMovieButton onClick={handleAddMovie}>+ ADD MOVIE</AddMovieButton>
        </TopContainerHeader>
        <SearchMovieContent>
          <SearchForm onSearch={(query) => console.log(query)} />
        </SearchMovieContent>
      </TopContainer>

      <DetailsContainer>
        <MovieDetails movie={MOVIE_MOCK}></MovieDetails>
      </DetailsContainer>
      <MoviesContainer>
        <DetailsHeader>
          <GenreSelect
            genreList={GENRE_LIST}
            onSelect={(genre) => console.log(genre)}
          />
          <SortControl
            sortList={['Release Date', 'Title']}
            onSortChange={(sortOption) =>
              console.log('onSortChange', sortOption)
            }
          ></SortControl>
        </DetailsHeader>
        <MovieTile
          onEdit={handleMovieEdit}
          onDelete={handleMovieDeleteClick}
          movie={MOVIE_MOCK}
        ></MovieTile>
      </MoviesContainer>
      {showDialog && (
        <Dialog title={dialogContent.title} onClose={() => toggleDialog(false)}>
          {dialogContent.children}
        </Dialog>
      )}
    </MovieListPageContainer>
  );
}
