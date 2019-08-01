import React from 'react';
import { Icon , Card} from 'semantic-ui-react';

export default (props) => (
  (props.champion)?
    card(props):
    emptyCard()

)


const card = (props) => (
  <Card>
  <Card.Content>
    <Icon name="blind" size="Mini"/>
    <Card.Header>{props.champion}</Card.Header>
    <Card.Meta>{"Cost: "+props.cost}</Card.Meta>
  </Card.Content>
</Card>
)

const emptyCard = () => (
  <Card/>
)
