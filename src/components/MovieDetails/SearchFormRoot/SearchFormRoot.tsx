import { SearchForm } from '../../SearchForm/SearchForm';
import { AppLogo } from '../../../App';
import {
  ContainerWithBackground,
  AddMovieButton,
  SearchMovieContent,
} from './SearchFormRoot.styled';
import { TopContainerHeader } from '../../MovieListPage/MovieListPage.styled';

export function SearchFormRoot() {
  return (
    <ContainerWithBackground>
      <TopContainerHeader>
        <AppLogo />
        <AddMovieButton>+ ADD MOVIE</AddMovieButton>
      </TopContainerHeader>
      <SearchMovieContent>
        <SearchForm onSearch={() => console.log('search')}></SearchForm>
      </SearchMovieContent>
    </ContainerWithBackground>
  );
}
