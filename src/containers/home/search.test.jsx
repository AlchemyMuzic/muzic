/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import MockData from '../../data/MockData.json';
import { MemoryRouter } from 'react-router-dom';
import Search from './Home';

const server = setupServer(
  rest.get('http://musicbrainz.org/ws/2/artist?query=madonna&fmt=json&limit=25', (req, res, ctx) => {
    return res(ctx.json(MockData));
  })
);

describe('Search Container with Mock Data and mock server interceptor', () => {
  // starts and ends mock server for tests 
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  
  // ------------------------------------------------------------

  it('displays a list of Madonna Artists', async() => {
    render(
      // mock router to check and see if we are rendering characterslist
      <MemoryRouter>
        <Search match={{ params:{ name:'Madonna' } }}/>
      </MemoryRouter>
    );

    // ------------------------------------------------------------

    // grabs alt text for loading 
    screen.getByText('Loading');

    // determines if a list is showing up after loading screen finishes
    const theTestList = await screen.findByTestId('artistsTest');
        
    return waitFor(() => {
      expect(theTestList).not.toBeEmptyDOMElement();
    });
  });
});
