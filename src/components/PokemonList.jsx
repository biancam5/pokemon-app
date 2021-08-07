import React from 'react'
import {CardGroup,Card,Container} from 'react-bootstrap'; 

import './PokemonList.css';
const PokemonList = ({pokemon}) => {
    return ( 
        <Container >
    <CardGroup >
      <Card >
        <Card.Img src={pokemon.sprites.front_default} alt=""  />
        <Card.Body >
          <Card.Title className="title">{pokemon.name}</Card.Title>
                     
          <Card.Title className="info pill">Weight</Card.Title>
          <Card.Text  className="text">
          {pokemon.weight}
          </Card.Text>
          <Card.Title className="info pill">Height</Card.Title>
          <Card.Text className="text">
          {pokemon.height}
          </Card.Text >
          
        </Card.Body>
      </Card>
    </CardGroup>
    </Container>


  )
}

 
export default PokemonList;


