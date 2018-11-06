import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generatePokeTile = () => {
  return this.props.pokemon.map(poke => <PokemonCard key={poke.name} poke={poke} />)
    }
  render() {
    return (
      <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>


        {this.generatePokeTile()}
      </Card.Group>
      </div>
    )
  }
}

export default PokemonCollection
