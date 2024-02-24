import { useRef, useState } from 'react';
import './Search.css';

interface InitialProps {
  initialValue?: string;
  onSearch: (query: string) => void;
}

export function Search({ initialValue, onSearch }: InitialProps) {
  const [state, setState] = useState(initialValue || '');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSearch() {
    onSearch(state);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSearch();
    }
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="input"
        value={state}
        onChange={(e) => setState(e.target?.value || '')}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        placeholder="What do you want to search?"
      />
      <button type="button" className="search-button" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );
}
