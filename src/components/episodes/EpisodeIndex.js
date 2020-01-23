import React from 'react'
import axios from 'axios'
import EpisodeCard from './EpisodeCard'

let seasonEpArr = []

let seasonId = null

class EpisodeIndex extends React.Component {
  state = {
    episodes: null
  }

  async componentDidMount() {
    try {
      let episodeArr = []
      const episodes = await axios.get('https://breakingbadapi.com/api/episodes')
      for (let i = 1; i < 6; i++) {
        episodeArr = episodes.data.filter(episode => episode.season === i.toString())
        seasonEpArr.push(episodeArr)
        seasonId = window.location.href.slice(-1)
      }
      this.setState({ episodes: seasonEpArr })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (!this.state.episodes) return null
    console.log(seasonId)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.episodes[parseInt(seasonId) - 1].map(episode => <EpisodeCard key={episode.episode_id} {...episode} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default EpisodeIndex