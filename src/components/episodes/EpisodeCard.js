import React from 'react'
import { Link } from 'react-router-dom'

class EpisodeCard extends React.Component {

  render() {
    console.log(this.props.season)
    return (
      <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
        <Link to={`/seasons/${this.props.season}/${this.props.episode_id}`}>
          <div className="card">
            <div className="card-header">
              <h4 className="card-header-title">Title: {this.props.title}</h4>
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
  }
}

export default EpisodeCard