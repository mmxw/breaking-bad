import React from 'react'
import axios from 'axios'
import CharacterCard from '../characters/CharacterCard'

class EpisodeView extends React.Component {

  state = { episode: null }

  async componentDidMount() {
    try {
      const str = window.location.href.slice(-2)
      const episodeId = () => {
        if (str.includes('/')) {
          return parseInt(str.slice(-1)) - 1
        } else {
          return parseInt(str) - 1
        }
      }

      const response = await axios.get('https://breakingbadapi.com/api/episodes')
      console.log(response.data[episodeId])
      this.setState({ episode: response.data[episodeId()] })
    } catch (error) {
      this.props.history.push('/errorpage')
    }
  }

  render() {
    if (!this.state.episode) return null
    const { episode } = this.state
    return (
      <section className="section">
        <div className="container">
          <h2 className="title">{episode.title}</h2>
          <h4 className="title is-4">Air Date: {episode.air_date}</h4>
          <hr />
          <div className="columns">
            <div className="column is-one-quarter">
              {this.state.episode.characters.map(
                character => <CharacterCard key={character.char_id} {...character} />
              )}
              
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default EpisodeView