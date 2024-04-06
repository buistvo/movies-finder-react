import { MovieDetailsRoot } from '@/components/MovieDetailsRoot/MovieDetailsRoot';
import { MoviesService } from '../../src/services/movies.service';
import {
  DetailsContainer,
  Icon,
  SearchSwitcherButton,
  TopContainerHeader,
} from './MovieDetailsRoot.styled';
import { AppLogo } from '@/components/AppLogo/AppLogo';
import { MovieDetails } from '@/components/MovieDetailsRoot/MovieDetails/MovieDetails';
import Link from 'next/link';
export default async function Page({
  params,
}: {
  params: { movieId: string };
}) {
  const movie = await new MoviesService().getById(params.movieId);
  return (
    <DetailsContainer>
      <TopContainerHeader>
        <AppLogo />
        <Link href={'test'}>
          <SearchSwitcherButton>
            <img
              className="w-30 h-30"
              src="/images/svg/magnifying-glass-svgrepo-com.svg"
            />
          </SearchSwitcherButton>
        </Link>
      </TopContainerHeader>
      <MovieDetails movie={movie} />
    </DetailsContainer>
  );
}
