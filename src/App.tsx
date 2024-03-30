import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { MovieListPage } from './components/MovieListPage/MovieListPage';
import { Logo } from './App.styled';
import {
  MovieDetailsRoot,
  movieDetailsLoader,
} from './components/MovieDetailsRoot/MovieDetailsRoot';
import { SearchFormRoot } from './components/SearchFormRoot/SearchFormRoot';
import { AddMovieForm } from './components/AddMovieForm/AddMovieForm';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
    children: [
      {
        path: '/',
        element: <SearchFormRoot />,
        children: [
          {
            path: 'new',
            element: <AddMovieForm></AddMovieForm>,
          },
        ],
      },
      {
        path: '/:movieId',
        element: <MovieDetailsRoot />,
        loader: movieDetailsLoader,
      },
    ],
  },
]);

export const AppLogo = () => (
  <Logo>
    <span>netflix</span>
    <span>roulette</span>
  </Logo>
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
