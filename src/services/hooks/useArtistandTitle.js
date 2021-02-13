import { useEffect, useState } from 'react';
import { getLyrics } from '../fetch';


export const useArtistandTitle = (name, title) => {
  const [loading, setLoading] = useState(true);
  const [lyrics, setLyrics] = useState([]);

  useEffect(() => {
    getLyrics(name, title)
      .then(lyrics => {
        setLyrics(lyrics);
        setLoading(false);
      });
  }, []);

  return {
    loading,
    lyrics
  };

};
