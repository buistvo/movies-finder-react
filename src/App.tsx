import './App.css';
import { Counter } from './components/counter/Counter';
import { Search } from './components/search/Search';

function App() {
  return (
    <>
      <Counter initialCount={1}></Counter>
      <Search onSearch={(query) => console.log(query)} />
    </>
  );
}

export default App;
