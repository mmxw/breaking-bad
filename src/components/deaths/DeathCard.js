import React from 'react'

const DeathCard = ({ death, cause, responsible, last_words, season, episode, number_of_deaths }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <div className="card">

      <h4>{death}</h4>
      <h5>{cause}</h5>
      <h5>{responsible}</h5>
      <h5>{last_words}</h5>
      <h5>{season}</h5>
      <h5>{episode}</h5>
      <h5>{number_of_deaths}</h5>

    </div>
  </div>
)

export default DeathCard