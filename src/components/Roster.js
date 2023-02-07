import React from 'react'
import '../App.css'
import Rosters from '../rosters.json'

const Roster = () => {
  console.log(Rosters)
  return (
    <div className="roster">
      <h1 className="fixtures">FIXTURES</h1>
      <h2 className="feb">FEBRURAY 2023</h2>
      <p>All fixtures are subject to change</p>

      {Rosters.map((roster) => {
        return (
          <div className="flex-container" key={roster.id}>
            <div className="flex-box">{roster.date}</div>
            <h3 className="flex-box">{roster.opponent}</h3>
            <img
              className="flex-box"
              width="40"
              src={roster.opponentIcon}
              alt="images"
            ></img>
            <p className="time">
              {roster.time} {roster.timezone}
            </p>
            <img className="flex-box" src={roster.icon} alt="i"></img>
            <h3 className="flex-box">{roster.id}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Roster
