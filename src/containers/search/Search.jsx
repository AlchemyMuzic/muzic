import React from 'react';
import ArtistList from '../../components/search/ArtistList';
import { useArtistList } from '../../services/hooks/useArtistList';
import SearchInput from '../../components/search/SearchInput';

const Search = () => {
  const { loading, artists, setSearch } = useArtistList();

  if(loading) return <h1>Loading</h1>;
  return <div>
    <SearchInput setSearch={setSearch}/> 
    <ArtistList artists={artists} />
  </div>;
};

export default Search;
