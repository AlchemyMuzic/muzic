import React from 'react';
import PropTypes from 'prop-types';
import ArtistDetails from '../../components/artist/ArtistDetails';
import Loading from '../../components/loading/Loading';
import { useArtistId } from '../../services/hooks/useArtistId';

export default function Artist({ match }) {
  const { loading, releases } = useArtistId(match.params.id);

  if(loading) return <Loading />;
  return (
    <div>
      <ArtistDetails releases={releases} />
    </div>
  );
}

Artist.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
