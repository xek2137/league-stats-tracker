import React from 'react';
import Game from "../Game/Game.js";

class Games extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Your last games:</h1>
        <Game />
        <Game />
        <Game />
        <Game />
        <Game />
      </div>
    )
  }
}

export default Games;