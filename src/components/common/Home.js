import React from 'react'
import Background from '../../assets/hero.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
}

const Home = () => (
  <section style={sectionStyle} className="hero is-fullheight-with-navbar">
    <div className="hero-body cheese-image">
      <div className="container">
        <p className="title is-1 has-text-black has-text-centered">
          
        </p>
        <p className="subtitle is-4 has-text-black has-text-centered">
          
        </p>
      </div>
    </div>
  </section>
)

export default Home