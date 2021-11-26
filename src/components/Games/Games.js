import React from 'react';
import Game from "../Game/Game.js";

class Games extends React.Component {
  render() {
    return (
      <div>
        games
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