import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './Menu';
import Login from './Login';
import Landing from './CreateLobby';

const App = () => (
  <Fragment>
    <Menu />
    <Container>
      <Landing />
    </Container>
  </Fragment>
);

export default App;
