import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { data } from "../../../assets/data/furnitur"

describe('Card tests:', () => {
    beforeEach(() => {
        render(<Card {...data.flat(3)[0]} />);
    });

    it('Card mounted', () => {
        expect(screen.getByTestId('card')).toBeInTheDocument();
    });
});