import React from 'react';
import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import About from './about';

describe('main', () => {
  it('Renders heading', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('About');
  });
});