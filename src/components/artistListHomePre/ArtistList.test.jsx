import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import ArtistList from './ArtistList';

describe('ArtistList component', () => {
    afterEach(() => cleanup());
    it('renders a list of artists', () => {
        const { asFragment } = render(<BrowserRouter><ArtistList
            artists={[]} /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    })
})
