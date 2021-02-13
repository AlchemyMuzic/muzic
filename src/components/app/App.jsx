import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import Home from '../../containers/artistList/ArtistList';
import ArtistAlbum from '../../containers/artistAlbum/ArtistAlbum';
import SongList from '../../containers/songList/SongsList';
import Lyrics from '../../containers/lyrics/Lyrics';

// --------------------------------------------------------------------

export default function App() {
  return (
    <Router>
      <Switch>
        {/* List where artists are displayed */}
        <Route exact path="/" component={Home} />
        {/* List where albums are displayed */}
        <Route exact path="/artists/:id/:name" component={ArtistAlbum} />
        {/* List where recordings are displayed  */}
        <Route exact path="/songs/:id/:name" component={SongList} />
        {/* Where Lyrics will be shown */}
        <Route exact path="/recordings/:name/:title" component={Lyrics} />
      </Switch>
    </Router>
  );
}
