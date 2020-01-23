import React from 'react'
import axios from 'axios'
import CharacterCard from '../characters/CharacterCard'

class EpisodeView extends React.Component {

  state = { episode: null }

  async componentDidMount() {
    const episodeID = this.props.match.params.id
    try {
      const { data } = await axios.get(`https://breakingbadapi.com/api/characters/${episodeId}`)
      console.log(episodeID)
      console.log(data)
      this.setState({ episode: data[0] })
    } catch (error) {
      this.props.history.push('/errorpage')
    }
  }

  render() {
    console.log(this.state.episode)
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