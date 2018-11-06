import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ""
  }

  onSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  showPoke = () =>{
    if (this.state.search === ""){
    return this.state.pokemon
  }else{
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.search))
  }
}

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(poke => this.setState({
      pokemon: poke
    }))
  }

makePoke = (pokemon, event)=>{
  event.preventDefault();
  fetch("http://localhost:3000/pokemon", {
   method: "POST",
   headers:{
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({
     height: "",
     weight: "",
     name: pokemon.name,
     abilities:[],
     moves: [],
     stats:[
       {value: pokemon.hp,
     name: "hp"
     }],
     types: [],
     sprites:{
       front: pokemon.frontUrl,
       back: pokemon.backUrl
     }
   })
 }).then(res=>res.json()).then(
   newPokemon => this.setState({
     pokemon: [...this.state.pokemon, newPokemon]
   })
 )



}

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.onSearchChange} showNoResults={false} />
        <br />
        <PokemonCollection pokemon={this.showPoke()}/>
        <br />
        <PokemonForm makePoke={this.makePoke}/>
      </div>
    )
  }
}

export default PokemonPage
