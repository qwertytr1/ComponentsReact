import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import FormPage from './forms';
import React from 'react';

describe('FormPage', () => {
  it('Render FormPage', () => {
    render(<FormPage />);
    expect(screen.getByText(/Form/i)).toBeInTheDocument();
    expect(screen.getByTestId('form-page')).toBeInTheDocument();
  });
});
