import React from 'react'
import axios from 'axios'

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
      <section className="section">
        <div className="container">
          <h2 className="title">{character.name}</h2>
          <h3 className="title is-3">{character.nickname}</h3>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={character.img} alt={character.name} />
              </figure>
            </div>
            <div className="column is-half">
              <hr />
              <h4 className="title is-4">Birthday: {character.birthday}</h4>
              <hr />
              <h4 className="title is-4">Occupation: {character.occupation}</h4>
              <hr />
              <h4 className="title is-4">Status: {character.status}</h4>
              <hr />
              <h4 className="title is-4">Actor: {character.portrayed}</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }

}

export default CharacterView