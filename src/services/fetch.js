/* eslint-disable max-len */
  
export const getArtistsByName = (name = 'madonna') => {
  return fetch(`http://musicbrainz.org/ws/2/artist?query=${name}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(({ artists }) => artists.map(artist => ({
      id: artist.id,
      name: artist.name,
    })));
};

//http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json
export const getReleasesByArtistId = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then(res => res.json())
    .then(({ releases }) => releases.map(release => ({
      release_id: release.id,
      album: release.title,
    })));
};

// http://musicbrainz.org/ws/2/recording?release=<RELEASE_ID>&fmt=json
export const getSongsByReleaseId = (id) => {
  return fetch(`http://musicbrainz.org/ws/2/recording?release=${id}&fmt=json`)
    .then(res => res.json())
    .then(({ recordings }) => recordings.map(song => ({
      title: song.title
    })));
};
