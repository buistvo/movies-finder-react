import './App.css';
import { GenreSelect } from './components/GenreSelect/GenreSelect';
import { SearchForm } from './components/SearchForm/SearchForm';
import { Counter } from './components/counter/Counter';

const GENRE_LIST = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME'];

function App() {
  return (
    <>
      <Counter initialCount={1}></Counter>
      <SearchForm onSearch={(query) => console.log(query)} />
      <GenreSelect
        genreList={GENRE_LIST}
        onSelect={(genre) => console.log(genre)}
      />
    </>
  );
}

export default App;
