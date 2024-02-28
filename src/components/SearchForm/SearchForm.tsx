import { ChangeEvent, FormEvent, useState } from 'react';
import './SearchForm.css';

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
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className="input"
        value={value}
        onChange={handleInputChange}
        placeholder="What do you want to search?"
      />
      <button type="submit" className="search-button">
        SEARCH
      </button>
    </form>
  );
}
