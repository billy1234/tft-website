import React from 'react';
import { Grid, Label, Header,Container } from 'semantic-ui-react';
import LobbyAdminPannel from './LobbyAdminPannel';

class Lobby extends React.Component {
  state = {
    data:false
  }

  componentDidMount(){
    fetch('/lobby/'+this.props.match.params.id+'/data')
    .then(res => res.json())
    .then((data) => {
      this.setState({data:data})
    })
    .catch(console.log)
  } 
  
  render(){return  <Container>
    <Grid centered columns={2}>
      <Grid.Column textAlign="center">
        <Header as="h2">
           Lobby <Label>{""+this.props.match.params.id}</Label>
        </Header>
        <LobbyAdminPannel admin={this.state.data.admin}/>
      </Grid.Column>
    </Grid>
  </Container>
  }

}

export default Lobby;
