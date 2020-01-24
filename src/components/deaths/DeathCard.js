import React from 'react'

const DeathCard = ({ death, cause, responsible, last_words, season, episode, number_of_deaths }) => (

  <div className="column is-half-desktop is-one-third-tablet is-full-mobile">
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title has-text-danger">{death}</h4>
      </div>
      <div className="card-content">
        <p><b>Cause of death: </b>{cause}</p>
        <p><b>Individual responsible: </b>{responsible}</p>
        <p><b>Last words: </b><i>"{last_words}"</i></p>
        <p><b>Season: </b>{season}</p>
        <p><b>Episode no: </b>{episode}</p>
        <p><b>People involved: </b>{number_of_deaths}</p>
      </div>
    </div>
  </div>

)

export default DeathCard