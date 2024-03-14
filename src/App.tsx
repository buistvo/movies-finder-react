import './App.css';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Counter } from './components/Counter/Counter';
import { MovieTile } from './components/MovieTile/MovieTile';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { SortControl } from './components/SortControl/SortControl';
import {
  DetailsContainer,
  MoviesContainer,
  DetailsHeader,
  ButtonRed,
} from './App.styled';
import { MOVIE_MOCK } from './mocks/movie';
import { GENRE_LIST_MOCK } from './mocks/genre-list';
import { useState } from 'react';
import { Dialog, DialogProps } from './components/Dialog/Dialog';
import { Movie } from './types/movie';
import { MovieForm } from './components/MovieForm/MovieForm';
import {
  DialogContent,
  ConfirmButton,
} from './components/Dialog/Dialog.styled';

function App() {
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
    <>
      <ButtonRed onClick={handleAddMovie}> Add movie</ButtonRed>
      <Counter initialCount={0}></Counter>
      <DetailsContainer>
        <MovieDetails movie={MOVIE_MOCK}></MovieDetails>
      </DetailsContainer>
      <SearchForm onSearch={(query) => console.log(query)} />
      <MoviesContainer>
        <DetailsHeader>
          <GenreSelect
            genreList={GENRE_LIST_MOCK}
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
    </>
  );
}

export default App;
