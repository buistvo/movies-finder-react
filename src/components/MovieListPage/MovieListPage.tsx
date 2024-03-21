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
  const isMount = useIsMount();

  const [cancelSource, setCancelSource] = useState<CancelTokenSource | null>(
    null
  );
  const [showDialog, setShowDialog] = useState(false);
  const [search, setSearch] = useState(searchParams.get('search'));
  const [genre, setGenre] = useState(searchParams.get('genre'));
  const [sortBy, setSortBy] = useState<keyof MoviesResponse>(
    searchParams.get('sortBy') as keyof MoviesResponse
  );
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const [total, setTotal] = useState<number>();

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
      setTotal(result.totalAmount);
    } catch (error) {
      if (axios.isCancel(error)) return;
    }
  };

  const [dialogContent, setDialogContent] = useState<DialogProps>({
    children: null,
    title: '',
  });

  useEffect(() => {
    fetchData({
      search: search || genre,
      searchBy: search ? 'title' : 'genres',
      sortBy: sortBy,
      sortOrder: 'asc',
    });
  }, []);

  useEffect(() => {
    if (isMount) return;
    const params = {
      ...(search?.length && { search }),
      ...(genre?.length && { genre }),
      ...(sortBy?.length && { sortBy }),
    };
    setSearchParams(params);
  }, [search, genre, sortBy]);

  useEffect(() => {
    if (isMount) return;
    fetchData({
      search,
      searchBy: 'title',
      sortBy: sortBy,
      sortOrder: 'asc',
    });
  }, [search]);

  useEffect(() => {
    if (isMount) return;
    fetchData({
      search: genre,
      searchBy: 'genres',
      sortBy: sortBy,
      sortOrder: 'asc',
    });
  }, [genre]);

  useEffect(() => {
    if (isMount) return;
    fetchData({
      search: search || genre,
      searchBy: search ? 'title' : 'genres',
      sortBy: sortBy,
      sortOrder: 'asc',
    });
  }, [sortBy]);

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
                initialValue={search || ''}
                onSearch={(query) => setSearch(query)}
              />
            </SearchMovieContent>
          </SearchMovieContainer>
        )}
      </TopContainer>

      <MoviesContainer>
        <DetailsHeader>
          <GenreSelect
            initialSelectedGenre={genre || ''}
            genreList={GENRE_LIST}
            onSelect={(genre) => handleSetGenre(genre)}
          />
          <SortControl
            sortList={SORT_OPTIONS}
            onSortChange={(sortOption) => setSortBy(sortOption)}
          ></SortControl>
        </DetailsHeader>
        <MoviesTotal>{total} MOVIES FOUND</MoviesTotal>
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
