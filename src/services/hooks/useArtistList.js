import { useState, useEffect } from 'react';
import { getArtistsByName } from '../../services/fetch';

export const useArtistList = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('Madonna');

  useEffect(() => {
    getArtistsByName(search)
      .then(artists => {
        setArtists(artists);
        setLoading(false);
      });
  }, [search]);
  
  // add a piece of state. 

  return {
    loading,
    artists,
    setSearch
  };
};
