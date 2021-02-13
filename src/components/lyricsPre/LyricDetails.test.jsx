import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LyricDetails from './LyricDetails';

describe('LyricDetails component', () => {
    afterEach(() => cleanup());
    it('renders a list of artists', () => {
        const { asFragment } = render(<LyricDetails
            lyrics={''} />);
        expect(asFragment()).toMatchSnapshot();
    })
})
