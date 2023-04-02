import React, { useEffect } from 'react';
import style from './search.module.css'
type TProps = { sortBy: string; setSortBy: (value: string) => void };

function SearchBar({ sortBy, setSortBy }: TProps) {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSortBy(e.target.value);
  };
  const componentDidMount = () => {
    const value = localStorage.getItem('searchInput');

    if (!value) return;

    if (value) this.setState({ value });
  }
  const componentWillUnmount = () => {
    if (!this.state) return;

    const value = this.state.value;
    if (value) localStorage.setItem('searchInput', value);
  }

  useEffect(() => {
    return () => {
      localStorage.setItem('rssSearch', sortBy);
    };
  }, [sortBy]);

  return (
    <input
      className={style.search}
      onChange={searchHandler}
      defaultValue={sortBy}
      placeholder="Search..."
      type="search"
      name="search"
      data-testid="search-input"
    // style={style.search}
    />
  );
}

export default SearchBar;