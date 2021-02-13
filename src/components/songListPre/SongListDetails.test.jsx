import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import SongListDetails from './SongListDetails';

describe('SongListDetails component', () => {
    afterEach(() => cleanup());
    it('renders a list of artists', () => {
        const { asFragment } = render(<BrowserRouter><SongListDetails
            songs={[]} /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    })
})
