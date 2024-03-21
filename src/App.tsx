import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { MovieListPage } from './components/MovieListPage/MovieListPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <MovieListPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
