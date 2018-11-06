import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggleFront: true
  }

    clickCard = () =>
    this.setState({

      toggleFront: !this.state.toggleFront
    })

  getHp = () =>
    {
      return this.props.poke.stats.map(obj => {
    if (obj.name === 'hp'){
      return obj.value
    }
    })
    }

renderPic =() => {
  if (this.state.toggleFront) {
    return this.props.poke.sprites.front
  } else {
  return this.props.poke.sprites.back
}
}





  render() {
// console.log(this.props.poke.sprites.front)
    return (
      <Card>
        <div onClick={this.clickCard}>
          <div className="image">
          <img src={this.renderPic()} />
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.getHp()}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
