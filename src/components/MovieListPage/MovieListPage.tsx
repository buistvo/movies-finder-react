import { GENRE_LIST } from '../../constants/genre-list-options';
import { GenreSelect } from '../GenreSelect/GenreSelect';
import { MovieTile } from '../MovieTile/MovieTile';
import { SortControl } from '../SortControl/SortControl';
import {
  MoviesContainer,
  DetailsHeader,
  MovieListPageContainer,
  MovieListPageFooter,
  MoviesTotal,
  TopContainer,
  MoviesGrid,
} from './MovieListPage.styled';
import { Dialog, DialogProps } from '../Dialog/Dialog';
import { Movie } from '../../types/movie';
import { DialogContent, ConfirmButton } from '../Dialog/Dialog.styled';
import { MovieForm } from '../MovieForm/MovieForm';
import { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { MovieQueryParams, MoviesResponse } from '../../types/movies-response';
import { MoviesService } from '../../services/movies.service';
import { SORT_OPTIONS } from '../../constants/sort-options';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AppLogo } from '../../App';

export function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [cancelSource, setCancelSource] = useState<CancelTokenSource | null>(
    null
  );
  const [showDialog, setShowDialog] = useState(false);
  const [genre, setGenre] = useState(searchParams.get('genre'));
  const [sortBy, setSortBy] = useState<keyof MoviesResponse>(
    searchParams.get('sortBy') as keyof MoviesResponse
  );
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [total, setTotal] = useState<number>();

  const fetchData = async (params?: MovieQueryParams) => {
    try {
      if (cancelSource) {
        cancelSource.cancel();
        setCancelSource(null);
      }
      const source = axios.CancelToken.source();
      setCancelSource(source);
      const result = await new MoviesService().getAll(params, source);
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
    const query = searchParams.get('query');
    const params = {
      ...(query?.length && { query }),
      ...(genre?.length && { genre }),
      ...(sortBy?.length && { sortBy }),
    };
    setSearchParams(params);
  }, [genre, sortBy]);

  useEffect(() => {
    const query = searchParams.get('query');
    fetchData({
      search: query || genre,
      searchBy: query ? 'title' : 'genres',
      sortBy: sortBy,
      sortOrder: 'asc',
    });
  }, [searchParams]);

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
          onSubmit={(mov) => {
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
        <Outlet />
      </TopContainer>

      <MoviesContainer>
        <DetailsHeader>
          <GenreSelect
            initialSelectedGenre={genre || ''}
            genreList={GENRE_LIST}
            onSelect={setGenre}
          />
          <SortControl
            initialValue={sortBy}
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
