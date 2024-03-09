import './App.css';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Counter } from './components/Counter/Counter';
import { MovieTile } from './components/MovieTile/MovieTile';
import styled from 'styled-components';
import { Colors } from './Colors';
import { MovieDetails } from './components/MovieDetails/MovieDetails';
import { MovieDetailed } from './types/movie-detailed';
import { SortControl } from './components/SortControl/SortControl';
const GENRE_LIST = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

const movie = {
  // imageUrl:
  //   'https://occ-0-3890-3467.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQuw64xfBV5j5DQJUoA49h-jGHMW7G6ZM8f7u7JdyB-yQ4lorrY9IVNJ80Ps-nKD397nLtRsaaQFYDTdrjB9DaTLxsQDbVj9gocoPO_2QY_BBZ07jh9ZRu0IVFhcqlTI7rPA5qWcUS4JRS-WHcpb7e4PMS05NhKJULA3_pEejFw3BW7c09YJ6hW9sKAq8dbbVyJOA6pm4fsN7A8d2izhJUdWZiNiTX8VGJbtO3mlOiNRY6gaqYQYRUu4ZbfoPTDXJz-udj_Qz2nbyDVMQPgNUGLARBINGg.webp?r=284',
  name: 'Code 8',
  imageUrl: '/images/code-8.webp',
  genreList: ['Action', 'Drama'],
  year: '2024',
};

const movieDetails: MovieDetailed = {
  ...movie,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
  duration: '2h 34m',
  rating: 3.5,
};

const MoviesContainer = styled.div`
  background-color: ${Colors.Workspace};
  padding: 2rem;
`;

const DetailsContainer = styled.div`
  background-color: ${Colors.Workspace};
  padding: 2rem;
`;

const DetailsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: grey;
  }
`;

function App() {
  return (
    <>
      <Counter initialCount={0}></Counter>
      <DetailsContainer>
        <MovieDetails movie={movieDetails}></MovieDetails>
      </DetailsContainer>
      <SearchForm onSearch={(query) => console.log(query)} />
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

        <MovieTile movie={movie}></MovieTile>
      </MoviesContainer>
    </>
  );
}

export default App;
