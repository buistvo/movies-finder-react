import { GENRE_LIST_OPTIONS } from '../../constants/genre-list-options';
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
import { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from 'axios';
import { MovieQueryParams, MoviesResponse } from '../../types/movies-response';
import { MoviesService } from '../../services/movies.service';
import { SORT_OPTIONS } from '../../constants/sort-options';
import { useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AppLogo } from '../AppLogo/AppLogo';

export function MovieListPage() {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchParamsUrl = `?${searchParams.toString()}`;

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
  const query = searchParams.get('query');

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
    const params = {
      ...(query?.length && { query }),
      ...(genre?.length && { genre: genre.toLowerCase() }),
      ...(sortBy?.length && { sortBy }),
    };
    setSearchParams(params);
  }, [genre, sortBy]);

  useEffect(() => {
    fetchData({
      search: query,
      searchBy: 'title',
      sortBy: sortBy,
      sortOrder: 'asc',
      filter: genre,
    });
  }, [searchParams]);

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

  return (
    <MovieListPageContainer>
      <TopContainer>
        <Outlet />
      </TopContainer>

      <MoviesContainer>
        <DetailsHeader>
          <GenreSelect
            initialSelectedGenre={genre || ''}
            genreList={GENRE_LIST_OPTIONS}
            onSelect={setGenre}
          />
          <SortControl
            initialValue={sortBy}
            sortList={SORT_OPTIONS}
            onSortChange={setSortBy}
          ></SortControl>
        </DetailsHeader>
        <MoviesTotal>{total} MOVIES FOUND</MoviesTotal>
        <MoviesGrid>
          {movieList.map((movie, index) => (
            <MovieTile
              key={movie.name! + index}
              onEdit={(movie) =>
                navigate(`/${movie.id}/edit${searchParamsUrl}`)
              }
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
