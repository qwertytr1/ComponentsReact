import React from 'react';
import MySearch from '../../components/UI element/input/MySearch';
import CardList from '../../components/UI element/cardlist/cardList';
import { useEffect, useState } from 'react';
import characterService from '../../services/CharacterService';
import { TCharacters } from '../../components/types/types';
import axios from 'axios';
import styles from './mainPage.module.css';
function HomePage() {
  const [characters, setCharacters] = useState<TCharacters['results'] | null>(null);
  const [error, setError] = useState<string>();
  const [isLoading, setisLoading] = useState(true);
  const [sortBy, setSortBy] = useState(localStorage.getItem('rssSearch') || '');
  const handleSearch = (value: string) => {
    setSortBy(value);
  };
  const getCharacters = async (value = '') => {
    setisLoading(true);
    try {
      setError('');
      const dataCharacters = await characterService.get(value);
      setCharacters(dataCharacters);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message: string = error.response?.data.error;
        setError(message);
      }
    }
    setisLoading(false);
  };
  useEffect(() => {
    getCharacters(localStorage.getItem('rssSearch') || '');
  }, []);

  if (isLoading) {
    return (
      <div data-testid="spinner" className={styles.spinner}>
        Loading
      </div>
    );
  }

  return (
    <>
      <h2>Home page</h2>
      <MySearch setSortBy={handleSearch} sortBy={sortBy} getData={getCharacters} />
      {!error ? characters && <CardList data={characters} /> : <h1 data-testid="error">{error}</h1>}
    </>
  );
}

export default HomePage;
