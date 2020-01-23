import React from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import SearchBar from '../common/SearchBar'

class CharacterIndex extends React.Component {
  state = {
    characters: [],
    userInput: ''
  }

  async componentDidMount() {
    try {
      const characters = await axios.get('https://breakingbadapi.com/api/characters')
      console.log(characters.data)
      this.setState({ characters: characters.data })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (userInput) => {
    this.setState({ userInput })
  }

  render() {
    const charArr = this.state.characters.filter(character => character.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    return (
      <section className="section">
        <div className="container">
          <SearchBar onChange={ this.handleChange }/>
          <div className="columns is-mobile is-multiline">
            {charArr.map(character => <CharacterCard key={character.char_id} {...character} />)}
          </div>
        </div>
      </section>
    )
  }

}

export default CharacterIndex