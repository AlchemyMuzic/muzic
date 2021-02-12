/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import ArtistAlbumDetails from '../../components/artistAlbumPre/ArtistAlbumDetails';
import Loading from '../../components/loading/Loading';
import { useArtistId } from '../../services/hooks/useArtistId';

export default function ArtistAlbum({ match }) {
  const { loading, releases } = useArtistId(match.params.id);

  if(loading) return <Loading />;
  return (
    <div>
      <ArtistAlbumDetails releases={releases} />
    </div>
  );
}

ArtistAlbum.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
