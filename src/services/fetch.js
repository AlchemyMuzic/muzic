/* eslint-disable max-len */
  
export const getAllArtists = (name = 'madonna') => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(({ artists }) => artists.map(artist => ({
      id: artist.id,
      name: artist.name,
    })));
};
    
  
