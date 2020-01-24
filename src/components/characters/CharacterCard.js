import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ char_id, name, img, nickname }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <Link to={`/characters/${char_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{name}/{nickname}</h4>
        </div>
        <div className="card-image">
          <figure className="image is-4by5">
            <img src={img} alt={name} />
          </figure>
        </div>
      </div>
    </Link>
  </div>
)

export default CharacterCard