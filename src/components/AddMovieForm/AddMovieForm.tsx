import { Dialog } from '../Dialog/Dialog';
import { MovieForm } from '../MovieForm/MovieForm';
import { useNavigate } from 'react-router-dom';

export function AddMovieForm() {
  const navigate = useNavigate();

  return (
    <Dialog onClose={() => navigate('../')} title={'ADD MOVIE'}>
      <MovieForm onSubmit={() => console.log('test')}></MovieForm>
    </Dialog>
  );
}
