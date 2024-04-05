import { Icon } from '../../App.styled';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../types/movie';
import { AppLogo } from '../AppLogo/AppLogo';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { TopContainerHeader } from '../MovieListPage/MovieListPage.styled';
import {
  DetailsContainer,
  SearchSwitcherButton,
} from './MovieDetailsRoot.styled';
import SearchLogoIcon from '/images/svg/magnifying-glass-svgrepo-com.svg';
import { useLoaderData } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export async function movieDetailsLoader({
  params,
}: {
  params: { movieId?: string };
}) {
  const movie = await new MoviesService().getById(params.movieId!);
  return { movie };
}

export function MovieDetailsRoot() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const linkUrl = `/?${searchParams.toString()}`;
  const { movie } = useLoaderData() as { movie: Movie };

  return (
    <DetailsContainer>
      <Outlet />
      <TopContainerHeader>
        <AppLogo />
        <Link to={linkUrl}>
          <SearchSwitcherButton>
            <Icon src={SearchLogoIcon} />
          </SearchSwitcherButton>
        </Link>
      </TopContainerHeader>
      <MovieDetails movie={movie} />
    </DetailsContainer>
  );
}
