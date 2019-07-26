import React from 'react';
import { Form, Grid, Message, Button, Segment, Header } from 'semantic-ui-react';

export default () => (
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          New Lobby
        </Header>
        <Segment>
          <Form size="large">
            <Form.Input
              fluid
              icon="male"
              iconPosition="left"
              placeholder="Players"
            />
  
            <Button color="blue" fluid size="large">
              Create Lobby
            </Button>
          </Form>
        </Segment>
        <Message>
          Not registered yet? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );