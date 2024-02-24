import './App.css';
import { Counter } from './components/Counter/Counter';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import { Search } from './components/Search/Search';

const GENRE_LIST = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

function App() {
  return (
    <>
      <Counter initialCount={1}></Counter>
      <Search onSearch={(query) => console.log(query)} />
      <GenreSelect
        genreList={GENRE_LIST}
        onSelect={(genre) => console.log(genre)}
      />
    </>
  );
}

export default App;
