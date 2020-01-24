import React from 'react'
import { Link } from 'react-router-dom'

const SeasonCard = ({ seasonId, img }) => (
  <div className="column is-one-fifth-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/seasons/${seasonId}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">Season {seasonId}</h4>
        </div>
        <div className="card-image">
          <figure className="image is-2by3">
            <img src={img} alt={name} />
          </figure>
        </div>
      </div>
    </Link>
  </div>
)

export default SeasonCard