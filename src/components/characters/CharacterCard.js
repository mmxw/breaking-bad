import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ char_id, name, image, nickname }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet if-full-mobile">

    <Link to={`/characters/${char_id}`}>
      <div className="card">
        <h4 className="card-header-title">{name}/{nickname}</h4>

        <figure className="image">
          <img src={image} alt={name} />
        </figure>

      </div>
    </Link>
  </div>
)

export default CharacterCard

//TODO: Styling card, fix broken img link