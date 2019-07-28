import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

export default (props) => {
  {console.log(props)}
   return (props.admin)? 
    <Container>you are admin</Container> :
    <Container> you are not admin </Container>
};
  
  