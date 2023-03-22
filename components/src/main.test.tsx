import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CardList } from './components/cardList';

import { Main } from './mainPage';

describe('main', () => {
  it('Renders heading', () => {
    render(<Main />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('Paws');
  });

  beforeEach(() => {
    render(<CardList />);
  });

  it('amount of cards in card list have length equal 50', () => {
    expect(screen.getAllByTestId('card')).toHaveLength(120);
  });
});
