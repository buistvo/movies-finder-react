import { GENRE_LIST } from '../../constants/genre-list-options';
import { MOVIE_MOCK } from '../../mocks/movie';
import { GenreSelect } from '../GenreSelect/GenreSelect';
import { MovieTile } from '../MovieTile/MovieTile';
import { SortControl } from '../SortControl/SortControl';
import {
  MoviesContainer,
  DetailsHeader,
  DetailsContainer,
  AddMovieButton,
  Logo,
  MovieListPageContainer,
  MovieListPageFooter,
  MoviesTotal,
  SearchMovieContainer,
  SearchMovieContent,
  TopContainerHeader,
  TopContainer,
} from './MovieListPage.styled';
import { Dialog, DialogProps } from '../Dialog/Dialog';
import { Movie } from '../../types/movie';
import { DialogContent, ConfirmButton } from '../Dialog/Dialog.styled';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { MovieForm } from '../MovieForm/MovieForm';
import { SearchForm } from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AppLogo = () => (
  <Logo>
    <span>netflix</span>
    <span>roulette</span>
  </Logo>
);

const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export function MovieListPage() {
  const [showDialog, setShowDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState('');
  const [sortList, setSortList] = useState(['Release Date', 'Title']);
  const [movieList, setMovieList] = useState([
    MOVIE_MOCK,
    MOVIE_MOCK,
    MOVIE_MOCK,
    MOVIE_MOCK,
    MOVIE_MOCK,
    MOVIE_MOCK,
  ]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const [dialogContent, setDialogContent] = useState<DialogProps>({
    children: null,
    title: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:4000/movies');
      console.log(result);
    };
    fetchData();
  }, [searchTerm, genre, sort]);

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
        {selectedMovie ? (
          <DetailsContainer>
            <TopContainerHeader>
              <AppLogo />
              <AddMovieButton onClick={() => setSelectedMovie(undefined)}>
                SEARCH
              </AddMovieButton>
            </TopContainerHeader>
            <MovieDetails movie={selectedMovie}></MovieDetails>
          </DetailsContainer>
        ) : (
          <SearchMovieContainer>
            <TopContainerHeader>
              <AppLogo />
              <AddMovieButton onClick={handleAddMovie}>
                + ADD MOVIE
              </AddMovieButton>
            </TopContainerHeader>
            <SearchMovieContent>
              <SearchForm
                initialValue={searchTerm}
                onSearch={(query) => setSearchTerm(query)}
              />
            </SearchMovieContent>
          </SearchMovieContainer>
        )}
      </TopContainer>

      <MoviesContainer>
        <DetailsHeader>
          <GenreSelect
            genreList={GENRE_LIST}
            onSelect={(genre) => setGenre(genre)}
          />
          <SortControl
            sortList={sortList}
            onSortChange={(sortOption) => setSort(sortOption)}
          ></SortControl>
        </DetailsHeader>
        <MoviesTotal>39 MOVIES FOUND</MoviesTotal>
        <MoviesGrid>
          {movieList.map((movie, index) => (
            <MovieTile
              key={movie.name + index}
              onEdit={handleMovieEdit}
              onDelete={handleMovieDeleteClick}
              onClick={(movie) => setSelectedMovie(movie)}
              movie={movie}
            ></MovieTile>
          ))}
        </MoviesGrid>
      </MoviesContainer>

      <MovieListPageFooter>
        <AppLogo />
      </MovieListPageFooter>
      {showDialog && (
        <Dialog title={dialogContent.title} onClose={() => toggleDialog(false)}>
          {dialogContent.children}
        </Dialog>
      )}
    </MovieListPageContainer>
  );
}
