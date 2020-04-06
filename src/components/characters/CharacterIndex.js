import React from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'
import SearchBar from '../common/SearchBar'
import NotFound from '../common/NotFound'
<<<<<<< HEAD
import Background from '../../assets/char-bkrd.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
}
=======
>>>>>>> 7e4deea3b30f2d80dc7d501db155eee100a93250

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
      this.props.history.push('/errorpage')
    }
  }

  handleChange = (userInput) => {
    this.setState({ userInput })
  }

  render() {
    const charArr = this.state.characters.filter(character => character.name.toLowerCase().includes(this.state.userInput.toLowerCase()))
    return (
      <section style={sectionStyle} className="section">
        <div className="container">
          <SearchBar onChange={ this.handleChange } />
          <div className="columns is-mobile is-multiline">
            {charArr.length === 0 && this.state.userInput ?
              <NotFound /> :
              charArr.map(character => <CharacterCard key={character.char_id} {...character} />)}
          </div>
        </div>
      </section>
    )
  }

}

export default CharacterIndex