import React from 'react'
import axios from 'axios'
import Background from '../../assets/list-bkrd.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
}

class CharacterView extends React.Component {

  state = { character: null }

  async componentDidMount() {
    const charId = this.props.match.params.id
    try {
      const { data } = await axios.get(`https://breakingbadapi.com/api/characters/${charId}`)
      this.setState({ character: data[0] })
    } catch (error) {
      this.props.history.push('/errorpage')
    }
  }

  render() {
    if (!this.state.character) return null
    const { character } = this.state
    return (
      <section style={sectionStyle} className="section">
        <div className="container">
          <h2 className="title has-text-light">{character.name}</h2>
          <h3 className="title is-3 has-text-light">{character.nickname}</h3>
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={character.img} alt={character.name} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4 has-text-light">Birthday: {character.birthday}</h4>
              <h4 className="title is-4 has-text-light">Occupation: {character.occupation.join(', ')}</h4>
              <h4 className="title is-4 has-text-light">Status: {character.status}</h4>
              <h4 className="title is-4 has-text-light">Actor: {character.portrayed}</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default CharacterView