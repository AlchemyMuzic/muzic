import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/loading/Loading';
import LyricDetails from '../../components/lyricsPre/LyricDetails';
import { useArtistandTitle } from '../../services/hooks/useArtistandTitle';

export default function Lyrics({ match }) {
  // eslint-disable-next-line max-len
  const { loading, lyrics } = useArtistandTitle(match.params.name, match.params.title);
  
  if(loading) return <Loading />;
  return (
    <div>
      <LyricDetails {...lyrics} />
    </div>
  );
}

Lyrics.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
