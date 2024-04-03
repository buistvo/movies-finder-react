import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/movie';
import { Dialog } from '../Dialog/Dialog';
import { MovieForm } from '../MovieForm/MovieForm';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export function EditMovieForm() {
  const { movie } = useLoaderData() as { movie: Movie };
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchParamsUrl = `?${searchParams.toString()}`;

  async function handleSubmit(movie: Movie) {
    await new MoviesService().update(movie);
    navigate(`/${searchParamsUrl}`);
  }
  return (
    <Dialog onClose={() => navigate('/')} title={'EDIT MOVIE'}>
      <MovieForm onSubmit={handleSubmit} movie={movie}></MovieForm>
    </Dialog>
  );
}
