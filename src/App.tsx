import './App.css';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Counter } from './components/Counter/Counter';
import { MovieTile } from './components/MovieTile/MovieTile';
import styled from 'styled-components';
import { Colors } from './Colors';
const GENRE_LIST = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

const movie = {
  // imageUrl:
  //   'https://occ-0-3890-3467.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQuw64xfBV5j5DQJUoA49h-jGHMW7G6ZM8f7u7JdyB-yQ4lorrY9IVNJ80Ps-nKD397nLtRsaaQFYDTdrjB9DaTLxsQDbVj9gocoPO_2QY_BBZ07jh9ZRu0IVFhcqlTI7rPA5qWcUS4JRS-WHcpb7e4PMS05NhKJULA3_pEejFw3BW7c09YJ6hW9sKAq8dbbVyJOA6pm4fsN7A8d2izhJUdWZiNiTX8VGJbtO3mlOiNRY6gaqYQYRUu4ZbfoPTDXJz-udj_Qz2nbyDVMQPgNUGLARBINGg.webp?r=284',
  name: 'Code 8',
  imageUrl: '/images/code-8.webp',
  genreList: ['Action', 'Drama'],
  year: '2024',
};
const MoviesContainer = styled.div`
  background-color: ${Colors.Workspace};
`;

function App() {
  return (
    <>
      <Counter initialCount={0}></Counter>
      <SearchForm onSearch={(query) => console.log(query)} />
      <MoviesContainer>
        <GenreSelect
          genreList={GENRE_LIST}
          onSelect={(genre) => console.log(genre)}
        />
        <MovieTile movie={movie}></MovieTile>
      </MoviesContainer>
    </>
  );
}

export default App;
