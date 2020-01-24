import React from 'react'
import axios from 'axios'
import DeathCard from './DeathCard'
import SearchBar from '../common/SearchBar'
import NotFound from '../common/NotFound'

class Deaths extends React.Component {
  state = {
    deaths: [],
    userInput: ''
  }

  async componentDidMount() {
    try {
      const deaths = await axios.get('https://breakingbadapi.com/api/deaths')
      console.log(deaths.data)
      this.setState({ deaths: deaths.data })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (userInput) => {
    this.setState({ userInput })
  }

  render() {
    
    const charDeathArr = this.state.deaths.filter(character => character.death.toLowerCase().includes(this.state.userInput.toLowerCase()))
    // console.log(this.state.deaths)
    return (
      <section className="section">
        <div className="container">
          <SearchBar onChange={ this.handleChange }/>
          <div className="columns is-mobile is-multiline">
            {charDeathArr.length === 0 && this.state.userInput ?
              <NotFound /> :
              charDeathArr.map(death => <DeathCard key={death.death_id} {...death} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Deaths