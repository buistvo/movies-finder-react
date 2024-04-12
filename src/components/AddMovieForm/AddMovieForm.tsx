import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/movie';
import { Dialog } from '../Dialog/Dialog';
import { MovieForm } from '../MovieForm/MovieForm';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export function AddMovieForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchParamsUrl = `?${searchParams.toString()}`;
  async function handleSubmit(movie: Movie) {
    const response = await new MoviesService().create(movie);
    navigate(`/${response.id}${searchParamsUrl}`);
  }
  return (
    <Dialog onClose={() => navigate('../')} title={'ADD MOVIE'}>
      <MovieForm onSubmit={handleSubmit}></MovieForm>
    </Dialog>
  );
}
