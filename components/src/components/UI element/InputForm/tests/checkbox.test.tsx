import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CheckBox from '../checkBox';
import React from 'react';
const ref = React.createRef<HTMLInputElement>();
describe('FormPage', () => {
    it('Render FormPage', () => {
        render(<CheckBox error={''} label="passport" name="passport" reference={ref} />);
        expect(screen.getByText('passport')).toBeInTheDocument();
        expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });
});