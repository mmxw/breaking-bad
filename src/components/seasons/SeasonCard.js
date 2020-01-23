import React from 'react'
import { Link } from 'react-router-dom'

const SeasonCard = ({ season }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/seasons/${season}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">Season {season}</h4>
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