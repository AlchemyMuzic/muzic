import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import releases from '../../data/releases.json';
import Artist from './Artist';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  // eslint-disable-next-line max-len
  rest.get('http://musicbrainz.org/ws/2/release?artist=79239441-bfd5-4981-a70c-55c3f15c1287&fmt=json', (req, res, ctx) => {
    return res(ctx.json(releases));
  })
);


describe('Artist Container with Mock Data and mock server interceptor', () => {
  // starts and ends mock server for tests 
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a list of Madonna releases', async() => {
    render(
      // mock router to check and see if we are rendering characterslist
      <MemoryRouter>
        <Artist
          match={{ params:{ id:'79239441-bfd5-4981-a70c-55c3f15c1287' } }}
        />
      </MemoryRouter>
    );

    screen.getByText('Loading');

    const releaseList = await screen.findByTestId('releaseTest');

    return waitFor(() => {
      expect(releaseList).not.toBeEmptyDOMElement();
    });
  });
});
