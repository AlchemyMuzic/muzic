import { useEffect, useState } from 'react';
import { getReleasesByArtistId } from '../fetch';

export const useArtistId = (id) => {
  const [loading, setLoading] = useState(true);
  const [releases, setReleases] = useState([]);
  const [artistName, setArtistName] = useState('');

  useEffect(() => {
    getReleasesByArtistId(id)
      .then(releases => {
        setReleases(releases);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    releases
  };
};
