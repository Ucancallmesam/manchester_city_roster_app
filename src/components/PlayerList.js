import React from 'react'
import rosters from '../rosters.json'

const PlayerList = () => {
  const roster = rosters[25].PlayerList.map((position) => {
    return (
      <div className="playerlist">
        <h1 className="players">PLAYERS</h1>
        <h2 className="defenders">DEFENDERS</h2>
        <h3 className="flex-position">{position.defenders}</h3>
        <h3 className="flex-position">{position.midfielders}</h3>
      </div>
    )
  })
  console.log(roster)

  return <div>{roster}</div>
}

export default PlayerList
