import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { MovieListPage } from './components/MovieListPage/MovieListPage';
import { Logo } from './App.styled';
import {
  MovieDetailsRoot,
  movieDetailsLoader,
} from './components/MovieDetailsRoot/MovieDetailsRoot';
import { SearchFormRoot } from './components/SearchFormRoot/SearchFormRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    children: [
      {
        path: '/',
        element: <SearchFormRoot />,
      },
      {
        path: '/:movieId',
        element: <MovieDetailsRoot />,
        loader: movieDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
