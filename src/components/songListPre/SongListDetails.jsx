import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function SongListDetails({ songs }) {

  const songElements = songs.map(song => (
    <li key={song.title}>
      <Link to={`/songs/${song.id}`}>
        <h2>{song.title}</h2>
      </Link>
    </li>
  ));

  return (
    <ul data-testid="songTest">
      {songElements}
    </ul>
  );
}

SongListDetails.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  }))
};
