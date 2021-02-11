import { useState, useEffect } from 'react';
import { getAllArtists } from '../../services/fetch';

export const useArtistList = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists]  = useState([]);
  const [search, setSearch] = useState('Madonna');

  useEffect(() => {
    getAllArtists(search)
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
