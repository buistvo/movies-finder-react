import { SearchForm } from '../SearchForm/SearchForm';
import { AppLogo } from '../../App';
import {
  ContainerWithBackground,
  AddMovieButton,
  SearchMovieContent,
} from './SearchFormRoot.styled';
import { TopContainerHeader } from '../MovieListPage/MovieListPage.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function SearchFormRoot() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query'));

  useEffect(() => {
    const currentParams = searchParams.toString(); // Get current search params
    const urlSearchParams = new URLSearchParams(currentParams);
    if (query?.length) {
      urlSearchParams.set('query', query);
    } else {
      urlSearchParams.delete('query');
    }
    setSearchParams(urlSearchParams);
  }, [query]);

  return (
    <ContainerWithBackground>
      <TopContainerHeader>
        <AppLogo />
        <AddMovieButton>+ ADD MOVIE</AddMovieButton>
      </TopContainerHeader>
      <SearchMovieContent>
        <SearchForm initialValue={query || ''} onSearch={setQuery}></SearchForm>
      </SearchMovieContent>
    </ContainerWithBackground>
  );
}