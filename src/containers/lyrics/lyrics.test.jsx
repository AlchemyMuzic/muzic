/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import lyricsMocks from '../../data/lyricsMocks.json';
import Lyrics from './Lyrics';
import { MemoryRouter } from 'react-router-dom';


const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('https://api.lyrics.ovh/v1/Madonna/Taylor', (req, res, ctx) => {
    return res(ctx.json(lyricsMocks));
  })
);

describe('Artist Album Container with Mock Data and mock server interceptor', () => {
  // starts and ends mock server for tests 
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  // ---------------------------------------------------------------

  it('displays a lyrical compilation of greatness', async() => {
    render(
      // mock router to check and see if we are rendering SongList
      <MemoryRouter>
        <Lyrics
          match={{ params:{ name: 'Madonna', title: 'Taylor' } }}
        />
      </MemoryRouter>
    );

    screen.getByText('Loading');

    const lyrics = await screen.findByTestId('lyricsTest');

    return waitFor(() => {
      expect(lyrics).not.toBeEmptyDOMElement();
    });
  });
});
