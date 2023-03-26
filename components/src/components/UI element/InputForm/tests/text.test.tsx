import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import React from 'react';
import Text from '../textField';
const ref = React.createRef<HTMLInputElement>();
describe('FormPage', () => {
    it('Render FormPage', () => {
        render(<Text label="name" name="name" error={''} reference={ref} />);
        expect(screen.getByText('name')).toBeInTheDocument();
    });
});