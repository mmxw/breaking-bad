import React from 'react'
import { Link } from 'react-router-dom'

const SeasonCard = ({ title, seasonId, episode_id }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/seasons/${seasonId}/${episode_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">Title: {title}</h4>
        </div>
        {/* <div className="card-image">
          <figure className="image">
            <img src={img} alt={name} />
          </figure>
        </div> */}
      </div>
    </Link>
  </div>
)

export default SeasonCard