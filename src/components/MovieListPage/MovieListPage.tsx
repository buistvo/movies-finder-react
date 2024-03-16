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

const MovieListPageContainer = styled.div``;
const SearchMovieContainer = styled.div`
  height: 500px;
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 6px);
    height: 100%;
    background-image: url('images/literally-me.jpg');
    background-repeat: repeat;
    background-position: center;
    background-repeat: repeat;
    z-index: -1;
    filter: blur(6px);
    pointer-events: none;
  }
`;

const SearchMovieContent = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
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
      <SearchMovieContainer>
        <SearchMovieContent>
          <ButtonRed onClick={handleAddMovie}> Add movie</ButtonRed>
          <SearchForm onSearch={(query) => console.log(query)} />
        </SearchMovieContent>
      </SearchMovieContainer>

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
