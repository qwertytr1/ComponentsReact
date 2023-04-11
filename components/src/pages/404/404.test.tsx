import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page404 from './404';
import React from 'react';

describe('Page404', () => {
  it('Render Page404', () => {
    render(<Page404 />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/page not found/i);
  });
});
