import React from 'react'
import axios from 'axios'
// import CharacterCard from '../characters/CharacterCard'

class EpisodeView extends React.Component {

  state = {
    episode: null
    // allCharacters: null
  }

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
      const epRequest = await axios.get('https://breakingbadapi.com/api/episodes')
      // console.log(episodes.data[episodeId])
      // const charRequest = axios.get('https://breakingbadapi.com/api/characters')
      // console.log(characters.data)
      // await axios.all([epRequest, charRequest])
      //   .then(axios.spread((...responses) => {
      //     const res1 = responses[0]
      //     const res2 = responses[1]
      this.setState({
        episode: epRequest.data[episodeId()]
        // allCharacters: res2.data[0]
      })
      // }))



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
          <hr />
          <h4 className="title is-4">Air Date: {episode.air_date}</h4>
          <hr />
          <div className="columns">
            <div className="column is-one-quarter">
              <h4 className="title is-4">Characters:</h4>
              {episode.characters.map(
                character => <h4 key={character}>{character}</h4>
              )}
            </div>
          </div>
          <hr />
        </div>
      </section>
    )
  }

}

export default EpisodeView