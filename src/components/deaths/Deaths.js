import React from 'react'
import axios from 'axios'
import DeathCard from './DeathCard'

class Deaths extends React.Component {
  state = {
    deaths: null
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

  render() {
    if (!this.state.deaths) return null
    console.log(this.state.deaths)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.deaths.map(death => <DeathCard key={death.death_id} {...death} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Deaths