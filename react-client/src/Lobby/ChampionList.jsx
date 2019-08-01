import React from 'react';
import { Card, Segment, Header } from 'semantic-ui-react';
import ChampionCard from './ChampionCard';
export default (props) => (
    <Segment>
        <Header textAlign="center"> 
        {" "+props.champs}
            {(props.champs)? "data: "+props.champs: "No Data"}
        </Header>
        <Card.Group centered >
            <ChampionCard champion={props.champs} cost="1"/>
            <ChampionCard champion={props.champs} cost="2"/>
            <ChampionCard champion={props.champs} cost="3"/>
        </Card.Group>
    </Segment>
);