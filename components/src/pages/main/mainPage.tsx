import React from 'react';
import MySearch from '../../components/UI element/input/MySearch';
import CardList from '../../components/UI element/cardlist/cardList';
import { useAppSelector } from '../../hooks';
import { getSearch, useGetCharactersQuery } from '../../store';
import styles from './mainPage.module.css';
function HomePage() {
  const search = useAppSelector(getSearch());

  const { data = [], isFetching, isError } = useGetCharactersQuery(search);

  if (isFetching) {
    return (
      <div data-testid="spinner" className={styles.spinner}>
        Loading
      </div>
    );
  }
  return (
    <>
      <h2>Home page</h2>
      <MySearch />
      {!isError ? data && <CardList data={data.results} /> : <h1 data-testid="error">There is nothing here</h1>}
    </>
  );
}

export default HomePage;
