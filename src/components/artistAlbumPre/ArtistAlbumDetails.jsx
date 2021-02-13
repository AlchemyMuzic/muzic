import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import imageError from '../imageError/imageError';

export default function ArtistAlbumDetails({ releases }) {
  const { name } = useParams();
  const releasesElements = releases.map(release => (

    <li key={release.release_id}>
      <Link to={`/songs/${release.release_id}/${name}`}>
        <h2>{release.album}</h2>
        <img
          src={release.img}
          alt="release.album"/>
      </Link>
    </li>
  ));

  return (
    <ul data-testid="releaseTest">
      {releasesElements}
    </ul>
  );
}

ArtistAlbumDetails.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    release_id: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired
  }))
};
