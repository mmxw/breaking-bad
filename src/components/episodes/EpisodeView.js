import React from 'react'
import axios from 'axios'
import CharacterCard from '../characters/CharacterCard'
<<<<<<< HEAD
import Background from '../../assets/list-bkrd.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
}
=======
>>>>>>> 7e4deea3b30f2d80dc7d501db155eee100a93250

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
<<<<<<< HEAD

=======
      
>>>>>>> 7e4deea3b30f2d80dc7d501db155eee100a93250
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
<<<<<<< HEAD

    const { episode, allCharacters } = this.state
    const charArr = allCharacters.filter(character => episode.characters.includes(character.name))
<<<<<<< HEAD
    console.log(episode, allCharacters)
    console.log(charArr)
=======
    
    const { episode, allCharacters } = this.state
    console.log(episode, allCharacters)
    const charArr = allCharacters.filter(character => episode.characters.includes(character.name))
    
>>>>>>> 7e4deea3b30f2d80dc7d501db155eee100a93250
=======

>>>>>>> 78cb7adc0a8b0f5e8617039a1ccd5a51253c1704
    return (
      <section style={sectionStyle} className="section">
        <div className="container">
<<<<<<< HEAD
          <h2 className="title has-text-light">{episode.title}</h2>
          <h4 className="title is-4 has-text-light">Air Date: {episode.air_date}</h4>
          <h4 className="title is-4 has-text-light">Characters:</h4>
          <div className="columns is-mobile is-multiline">
            {charArr.map(character => <CharacterCard key={character.char_id} {...character} />)}
=======
          <h2 className="title">{episode.title}</h2>
          <hr />
          <h4 className="title is-4">Air Date: {episode.air_date}</h4>
          <hr />
          <h4 className="title is-4">Characters:</h4>
          <div className="columns">   
            <div className="columns is-mobile is-multiline">
              {charArr.map(character => <CharacterCard key={character.char_id} {...character} />)}       
            </div>
>>>>>>> 7e4deea3b30f2d80dc7d501db155eee100a93250
          </div>
        </div>
      </section>
    )
  }

}

export default EpisodeView