import { ChangeEvent, KeyboardEvent, useState } from 'react';
import './Search.css';

interface InitialProps {
  initialValue?: string;
  onSearch: (query: string) => void;
}

export function Search({ initialValue, onSearch }: InitialProps) {
  const [value, setValue] = useState(initialValue || '');

  function handleSearch() {
    onSearch(value);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="input"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="What do you want to search?"
      />
      <button type="button" className="search-button" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
}
