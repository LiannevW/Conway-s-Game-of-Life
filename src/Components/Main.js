import React, { PureComponent } from 'react'
import Grid from './Grid'

class Main extends PureComponent {
  constructor () {
    super();
    this.state = {
      generation: 0,
    }
}

  render() {

    return (
      <div>
        <h1>The Game of Life</h1>
        <Grid />
        <h1>Generations: {this.state.generation}</h1>
      </div>
    )
  }
}

export default Main
