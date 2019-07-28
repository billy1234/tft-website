import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import CreateLobby from './Landing/CreateLobby';
import Lobby from './Lobby/Lobby';


export default () => (
  <Router>
      <Route exact path='/' component={CreateLobby} />
      <Route path='/lobby/:id' component={Lobby} />
  </Router>
);