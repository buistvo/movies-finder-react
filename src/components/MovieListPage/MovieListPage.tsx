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
  MoviesGrid,
  SearchSwitcherButton,
  Icon,
} from './MovieListPage.styled';
import { Dialog, DialogProps } from '../Dialog/Dialog';
import { Movie } from '../../types/movie';
import { DialogContent, ConfirmButton } from '../Dialog/Dialog.styled';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { MovieForm } from '../MovieForm/MovieForm';
import { SearchForm } from '../SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { MovieQueryParams, MoviesResponse } from '../../types/movies-response';
import { MoviesService } from '../../services/movies.service';
import { SORT_OPTIONS } from '../../constants/sort-options';
import { useIsMount } from '../../hooks/useIsMount';
import { useSearchParams } from 'react-router-dom';

const AppLogo = () => (
  <Logo>
    <span>netflix</span>
    <span>roulette</span>
  </Logo>
);

export function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('query'));
  const isMount = useIsMount();

  const [cancelSource, setCancelSource] = useState<CancelTokenSource | null>(
    null
  );
  const [showDialog, setShowDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState<keyof MoviesResponse>();
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();

  const fetchData = async (params?: MovieQueryParams) => {
    try {
      if (cancelSource) {
        cancelSource.cancel();
        setCancelSource(null);
      }
      const source = axios.CancelToken.source();
      setCancelSource(source);
      const result = await new MoviesService().get(params, source);
      setCancelSource(null);
      setMovieList(result.data);
    } catch (error) {
      if (axios.isCancel(error)) return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [dialogContent, setDialogContent] = useState<DialogProps>({
    children: null,
    title: '',
  });

  const searchByTerm = useEffect(() => {
    if (isMount) return;
    fetchData({
      search: searchTerm,
      searchBy: 'title',
      sortBy: sort,
      sortOrder: 'asc',
    });
  }, [searchTerm]);

  const searchByGenre = useEffect(() => {
    if (isMount) return;
    fetchData({
      search: genre,
      searchBy: 'genres',
      sortBy: sort,
      sortOrder: 'asc',
    });
  }, [genre]);

  const sortBy = useEffect(() => {
    if (isMount) return;
    fetchData({
      search: searchTerm || genre,
      searchBy: searchTerm ? 'title' : 'genres',
      sortBy: sort,
      sortOrder: 'asc',
    });
  }, [sort]);

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
  }

  function handleAddMovie() {
    setDialogContent({
      title: 'EDIT MOVIE',
      children: (
        <MovieForm
          onSubmit={(mov) => {
            setShowDialog(false);
          }}
        ></MovieForm>
      ),
    });
    setShowDialog(true);
  }

  function handleSetGenre(genre: string) {
    if (genre === 'All') return setGenre('');
    setGenre(genre);
  }
  return (
    <MovieListPageContainer>
      <TopContainer>
        {selectedMovie ? (
          <DetailsContainer>
            <TopContainerHeader>
              <AppLogo />
              <SearchSwitcherButton onClick={() => setSelectedMovie(undefined)}>
                <Icon src={'/images/svg/magnifying-glass-svgrepo-com.svg'} />
              </SearchSwitcherButton>
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
            onSelect={(genre) => handleSetGenre(genre)}
          />
          <SortControl
            sortList={SORT_OPTIONS}
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
