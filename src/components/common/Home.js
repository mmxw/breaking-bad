import React from 'react'
import Background from '../../assets/hero.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`
}

const Home = () => (
  <section style={sectionStyle} className="hero is-fullheight-with-navbar">
    <div className="hero-body cheese-image">
      <div className="container">
        <p className="title is-1 has-text-black has-text-centered">
          Breaking Bad
        </p>
        <p className="subtitle is-4 has-text-black has-text-centered">
          Lets cook...
        </p>
      </div>
    </div>
  </section>
)

export default Home