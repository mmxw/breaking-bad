import React from 'react'
import axios from 'axios'
import CharacterCard from '../characters/CharacterCard'
import Background from '../../assets/list-bkrd.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
}

class EpisodeView extends React.Component {

  state = {
    episode: null,
    allCharacters: null
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

      await axios.all([
        axios.get('https://breakingbadapi.com/api/episodes'),
        axios.get('https://breakingbadapi.com/api/characters')
      ])
        .then(axios.spread((epRequest, charRequest) => {
          this.setState({
            episode: epRequest.data[episodeId()],
            allCharacters: charRequest.data
          })

        }))

    } catch (error) {
      this.props.history.push('/errorpage')
    }
  }

  render() {
    if (!this.state.episode) return null

    const { episode, allCharacters } = this.state
    const charArr = allCharacters.filter(character => episode.characters.includes(character.name))

    return (
      <section style={sectionStyle} className="section">
        <div className="container">
          <h2 className="title has-text-light">{episode.title}</h2>
          <h4 className="title is-4 has-text-light">Air Date: {episode.air_date}</h4>
          <h4 className="title is-4 has-text-light">Characters:</h4>
          <div className="columns is-mobile is-multiline">
            {charArr.map(character => <CharacterCard key={character.char_id} {...character} />)}
          </div>
        </div>
      </section>
    )
  }

}

export default EpisodeView