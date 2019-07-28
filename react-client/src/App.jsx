import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './Headers/Menu';
import Routes from './Routes';
import CreateLobby from './Landing/CreateLobby';

export default () => (
  <Fragment>
    <Menu />
    <Container>
      <Routes/>
    </Container>
  </Fragment>
);
