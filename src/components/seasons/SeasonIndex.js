import React from 'react'
import SeasonCard from './SeasonCard'

class SeasonIndex extends React.Component {

  state = {
    seasons: [
      {
        seasonId: '1',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/bb-s1-poster.jpg'
      },
      {
        seasonId: '2',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/bb-s2-poster.jpg'
      },
      {
        seasonId: '3',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/BB-s3-poster.jpg'
      },
      {
        seasonId: '4',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/bb-s4-poster.jpg'
      },
      {
        seasonId: '5',
        img: 'https://images.amcnetworks.com/blogs.amctv.com/wp-content/uploads/2013/12/bb-s5-poster.jpg'
      }
    ]
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.seasons.map(season => <SeasonCard key={season.seasonId} {...season} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default SeasonIndex