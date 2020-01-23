import React from 'react'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'


let seasonEpArr = []

class SeasonOneIndex extends React.Component {
  state = {
    episodes: null
  }

  async componentDidMount() {
    try {
      
      // let seasonEpArr = []
      let episodeArr = []
      const episodes = await axios.get('https://breakingbadapi.com/api/episodes')
      for (let i = 1; i < 6; i++) {
        episodeArr = episodes.data.filter(episode => episode.season === i.toString())
        seasonEpArr.push(episodeArr)
        console.log(seasonEpArr)
      }
      // console.log(episodes.data)
      this.setState({ episodes: seasonEpArr })

    } catch (error) {
      // console.log(error)
    }
  }

  render() {
    console.log(this.state.episodes)
    if (!this.state.episodes) return null
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.episodes.map(episode => <EpisodeCard key={episode.episode_id} {...episode} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default SeasonOneIndex