import React from 'react';
import { Container, Icon, Menu } from 'semantic-ui-react';

export default () => (
  <Menu>
    <Container>
      <Menu.Item as="a" header>
        <Icon
          size="large"
          name="chess rook"
          
        />
      </Menu.Item>

      <Menu.Menu position="right">
        <Menu.Item as="a" name="generate">
          Generate
        </Menu.Item>

        <Menu.Item as="a" name="enterCode">
          Enter Game Code
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);
