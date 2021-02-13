import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import ArtistAlbumDetails from './ArtistAlbumDetails';

describe('ArtistAlbumDetails component', () => {
    afterEach(() => cleanup());
    it('renders a list of releases and their cover art from a selected artist', () => {
        const { asFragment } = render(<BrowserRouter><ArtistAlbumDetails
            releases={[]} /></BrowserRouter>);
        expect(asFragment()).toMatchSnapshot();
    })
})
