import './App.css';
import { Counter } from './components/Counter/Counter';
import { Search } from './components/Search/Search';

function App() {
  return (
    <>
      <Counter initialCount={1}></Counter>
      <Search onSearch={(query) => console.log(query)} />
    </>
  );
}

export default App;
