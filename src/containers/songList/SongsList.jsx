import React from 'react';
import PropTypes from 'prop-types';
import SongListDetails from '../../components/songListPre/SongListDetails';
import Loading from '../../components/loading/Loading';
import { useReleaseId } from '../../services/hooks/useReleaseId';

// -----------------------------------------------------

export default function SongList({ match }) {
  const { loading, songs } = useReleaseId(match.params.id);

  if(loading) return <Loading />;
  return (
    <div >
      <SongListDetails songs={songs} />
    </div>
  );
}

SongList.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
