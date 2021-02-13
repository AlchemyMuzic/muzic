import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import CharacterDetailsPresentation from './CharacterDetailsPresentation';

function ArtistList({ artists }) {

  const artistsElements = artists.map(artist => (
    <li key={artist.id}>
      <Link to={`/artists/${artist.id}/${artist.name}`}>
        <h2>{artist.name}</h2>
      </Link>
    </li>
  ));

  return (
    <ul data-testid="artistsTest">
      {artistsElements}
    </ul>
  );
}

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired
};

export default ArtistList;
