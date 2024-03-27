import { ChangeEvent, FormEvent, useState } from 'react';
import './SearchForm.css';
import { ButtonRed } from '../../App.styled';
import { SearchContainer, SearchHeader } from './SearchForm.styled';

interface InitialProps {
  initialValue?: string;
  onSearch: (query: string) => void;
}

export function SearchForm({ initialValue, onSearch }: InitialProps) {
  const [value, setValue] = useState(initialValue || '');

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSearch(value);
  }

  return (
    <SearchContainer>
      <SearchHeader>FIND YOUR MOVIE</SearchHeader>
      <form onSubmit={handleSubmit} className="search-container">
        <input
          data-testid="search-input"
          type="text"
          className="input"
          value={value}
          onChange={handleInputChange}
          placeholder="What do you want to watch?"
        />
        <ButtonRed
          data-testid="search-button"
          type="submit"
          className="search-button"
        >
          SEARCH
        </ButtonRed>
      </form>
    </SearchContainer>
  );
}
