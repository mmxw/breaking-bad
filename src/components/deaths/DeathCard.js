import React from 'react'

const DeathCard = ({ death_id, death, cause, responsible, last_words, season, episode, number_of_deaths }) => (

  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">Death no: {death_id}</h4>
      </div>
      <div className="card-content">
        <p>Character: {death}</p>
        <p>Cause of death: {cause}</p>
        <p>Individual responsible: {responsible}</p>
        <p>Last words: {last_words}</p>
        <p>Season: {season}</p>
        <p>Episode no: {episode}</p>
        <p>People involved: {number_of_deaths}</p>
      </div>
    </div>
  </div>

)

export default DeathCard