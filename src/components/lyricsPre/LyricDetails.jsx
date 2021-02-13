import React from 'react';
import PropTypes from 'prop-types';

export default function ArtistAlbumDetails({ lyrics }) {
    console.log(lyrics);

  return (
    <p  data-testid="lyricsTest">
      {lyrics}
    </p>
  );
}

ArtistAlbumDetails.propTypes = {
  lyrics: PropTypes.string.isRequired,
};
