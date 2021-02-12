import React from 'react';
import ArtistList from '../../components/home/ArtistList';
import { useArtistList } from '../../services/hooks/useArtistList';
import SearchInput from '../../components/home/SearchInput';
import Loading from '../../components/loading/Loading';

const Home = () => {
  const { loading, artists, setSearch } = useArtistList();

  if(loading) return <Loading />;
  return <div>
    <SearchInput setSearch={setSearch}/> 
    <ArtistList artists={artists} />
  </div>;
};

export default Home;
