import { AppLogo } from '../../App';
import { Icon } from '../../App.styled';
import { MOVIE_MOCK } from '../../mocks/movie';
import { MovieDetails } from '../MovieDetails/MovieDetails';
import { TopContainerHeader } from '../MovieListPage/MovieListPage.styled';
import {
  DetailsContainer,
  SearchSwitcherButton,
} from './MovieDetailsRoot.styled';

export function MovieDetailsRoot() {
  return (
    <DetailsContainer>
      <TopContainerHeader>
        <AppLogo />
        <SearchSwitcherButton>
          <Icon src={'/images/svg/magnifying-glass-svgrepo-com.svg'} />
        </SearchSwitcherButton>
      </TopContainerHeader>
      <MovieDetails movie={MOVIE_MOCK} />
    </DetailsContainer>
  );
}
