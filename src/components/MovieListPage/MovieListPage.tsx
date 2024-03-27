import { GENRE_LIST_OPTIONS } from '../../constants/genre-list-options';
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
import SearchLogoIcon from '/images/svg/magnifying-glass-svgrepo-com.svg';

const AppLogo = () => (
  <Logo>
    <span>netflix</span>
    <span>roulette</span>
  </Logo>
);

export function MovieListPage() {
  const [cancelSource, setCancelSource] = useState<CancelTokenSource | null>(
    null
  );
  const [showDialog, setShowDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [sort, setSort] = useState<keyof MoviesResponse>();
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
      search: searchTerm || genre,
      searchBy: searchTerm ? 'title' : 'genres',
      sortBy: sort,
      sortOrder: 'asc',
    });
  }, [searchTerm, genre, sort]);

  function handleMovieEdit(movie: Movie) {
    setDialogContent({
      title: 'EDIT MOVIE',
      children: (
        <MovieForm
          movie={movie}
          onSubmit={() => {
            setShowDialog(false);
          }}
        ></MovieForm>
      ),
    });
    setShowDialog(true);
  }

  function handleMovieDeleteClick() {
    setDialogContent({
      title: 'DELETE MOVIE',
      children: (
        <DialogContent>
          <span>Are you sure you want to delete this movie?</span>
          <ConfirmButton onClick={() => setShowDialog(false)}>
            CONFIRM
          </ConfirmButton>
        </DialogContent>
      ),
    });
    setShowDialog(true);
  }

  function handleAddMovie() {
    setDialogContent({
      title: 'EDIT MOVIE',
      children: (
        <MovieForm
          onSubmit={() => {
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
              <SearchSwitcherButton onClick={() => setSelectedMovie(undefined)}>
                <Icon src={SearchLogoIcon} />
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
              <SearchForm initialValue={searchTerm} onSearch={setSearchTerm} />
            </SearchMovieContent>
          </SearchMovieContainer>
        )}
      </TopContainer>

      <MoviesContainer>
        <DetailsHeader>
          <GenreSelect genreList={GENRE_LIST_OPTIONS} onSelect={setGenre} />
          <SortControl
            sortList={SORT_OPTIONS}
            onSortChange={setSort}
          ></SortControl>
        </DetailsHeader>
        <MoviesTotal>{total} MOVIES FOUND</MoviesTotal>
        <MoviesGrid>
          {movieList.map((movie, index) => (
            <MovieTile
              key={movie.name + index}
              onEdit={handleMovieEdit}
              onDelete={handleMovieDeleteClick}
              onClick={setSelectedMovie}
              movie={movie}
            ></MovieTile>
          ))}
        </MoviesGrid>
      </MoviesContainer>

      <MovieListPageFooter>
        <AppLogo />
      </MovieListPageFooter>
      {showDialog && (
        <Dialog
          title={dialogContent.title}
          onClose={() => setShowDialog(false)}
        >
          {dialogContent.children}
        </Dialog>
      )}
    </MovieListPageContainer>
  );
}
