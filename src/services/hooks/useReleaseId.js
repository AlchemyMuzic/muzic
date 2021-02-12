import { useState, useEffect } from 'react';
import { getSongsByReleaseId } from '../../services/fetch';

export const useReleaseId = (id) => {
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongsByReleaseId(id)
      .then(songs => {
        setSongs(songs);
        setLoading(false);
      });
  }, [id]);

  return {
    loading,
    songs,
  };
};
