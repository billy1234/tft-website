import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

export default (props) => (
    <Container textAlign="center">
      {(props.admin)? 'you are Admin':"you are not admin"}
   </Container> 
);
  
  