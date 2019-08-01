import React from 'react';
import { Grid, Label, Header,Container } from 'semantic-ui-react';
import LobbyAdminPannel from './LobbyAdminPannel';
import ChampionList from './ChampionList';

const getMode = (mode) =>{
  return(!mode)? 
    'champByCost':
    mode;
}

class Lobby extends React.Component {
  state = {
    lobby:false,
    champs:false
  }

  componentDidMount(){
    this.loadLobby();
  }

  loadLobby(){
    fetch('/lobby/'+this.props.match.params.id+'/data')
    .then(res => res.json())
    .then((lobby) =>  loadChampList(lobby)
                      .then(champs => me.setState({lobby:lobby,champs}))
    )
    .catch(console.log)
  }



  render = () => (
    <Container>
      <Grid centered columns={2}>
        <Grid.Column>
          <Header as="h2" textAlign="center">
            Lobby <Label>{""+this.props.match.params.id}</Label>
            {console.log(this.state.champs)}
          </Header>
          {<ChampionList props={this.state.champs[0]}/>}
          {<ChampionList props={this.state.champs[1]}/>}
          {<ChampionList props={this.state.champs[2]}/>}
          {<ChampionList props={this.state.champs[3]}/>}
          {<ChampionList props={this.state.champs[4]}/>}
          {<ChampionList props={this.state.champs[5]}/>}
          {<ChampionList props={this.state.champs[6]}/>}
          <LobbyAdminPannel admin={this.state.lobby.admin}/>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
export default Lobby;

const loadChampList = (data) => {
  const seed = data.lobby.roundNo * data.lobby.seed;
  fetch('/' + getMode(data.lobby.mode) + `?players=${data.lobby.players}&seed=${seed}`)
    .then(res => res.json())      
    .catch((err) => console.log(err));
}
