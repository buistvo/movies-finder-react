import './App.css';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Counter } from './components/Counter/Counter';
import { MovieTile } from './components/MovieTile/MovieTile';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { SortControl } from './components/SortControl/SortControl';
import { DetailsContainer, MoviesContainer, DetailsHeader } from './App.styled';
import { MOVIE_MOCK } from './mocks/movie';
import { MOVIE_DETAILED_MOCK } from './mocks/movie-detailed';
import { GENRE_LIST_MOCK } from './mocks/genre-list';

function App() {
  return (
    <>
      <Counter initialCount={0}></Counter>
      <DetailsContainer>
        <MovieDetails movie={MOVIE_DETAILED_MOCK}></MovieDetails>
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

        <MovieTile movie={MOVIE_MOCK}></MovieTile>
      </MoviesContainer>
    </>
  );
}

export default App;
