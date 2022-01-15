import React from 'react';
import Game from "../Game/Game.js";

const Games = (props) => {
  return (
    <div className="container">
      <h1>
        {props.summonerName.name !== '' ? `${props.summonerName.name}, here are your last games:` : ''}
      </h1>
      <Game />
      <Game />
      <Game />
      <Game />
      <Game />
    </div>
  )
}

export default Games;