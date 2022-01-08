import React, {useState} from 'react';
import useCollapse from 'react-collapsed';
import styles from './Game.module.css'

const Game = ({collapsed, children}) => {
  const {getCollapseProps, getToggleProps, isExpanded} = useCollapse();

  return (
    <div className={`card ${styles.game}`}>
      <div className="cardBody">
        <div className="row mb-3">
          <div className="col">
            champion
          </div>
          <div className="col">
            game mode
          </div>
          <div className="col">
            kda
          </div>
          <div className="col">
            win/lose?
          </div>
        </div>
        <button
          className="btn btn-primary mb-3"
          {...getToggleProps()}
        >
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>

        <div {...getCollapseProps()}>
          <div className="row mb-3">
            <div className="col">
              k/d/a
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              role
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              k/d/a
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              k/d/a
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              role
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              k/d/a
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              k/d/a
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              role
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              k/d/a
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              k/d/a
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              role
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              k/d/a
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              k/d/a
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              role
            </div>
            <div className="col">
              character
            </div>
            <div className="col">
              summonerName
            </div>
            <div className="col">
              cs/perMin
            </div>
            <div className="col">
              k/d/a
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;
