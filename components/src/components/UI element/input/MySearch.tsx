import React, { type ChangeEvent, useEffect } from 'react';
import classes from './search.module.css';

type TProps = { sortBy: string; setSortBy: (value: string) => void };

function SearchBar({ sortBy, setSortBy }: TProps) {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', sortBy);
    };
  }, [sortBy]);

  return (
    <input
      onChange={searchHandler}
      defaultValue={sortBy}
      placeholder="Search..."
      type="search"
      name="search"
      data-testid="search-input"
    />
  );
}

export default SearchBar;
