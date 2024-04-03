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
import { EditMovieForm } from './components/EditMovieForm/EditMovieForm';
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
            element: <AddMovieForm />,
          },
        ],
      },
      {
        path: '/:movieId',
        element: <MovieDetailsRoot />,
        loader: movieDetailsLoader,
        children: [
          {
            path: 'edit',
            element: <EditMovieForm />,
            loader: movieDetailsLoader,
          },
        ],
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
