import React, {Component} from 'react';
import { Form, Grid, Message, Button, Segment, Header } from 'semantic-ui-react';

export default () =>(
    <Grid centered columns={2}>
      <Grid.Column>
        <Header as="h2" textAlign="center">
          New Lobby
        </Header>
        <Segment>
          <Form size="large" action="createLobby">
            <Form.Input
              fluid
              value='2'
              name = 'players'
              icon="male"
              iconPosition="left"
              placeholder="Players"
              />

              <Form.Button 
              color="blue" 
              fluid size="large"
              content="Submit"
              Create Lobby
            />
  
           
          </Form>
        </Segment>
        <Message>
          Lobby allready created? <a href="#">Enter Code</a>
        </Message>
      </Grid.Column>
    </Grid>
);
