import React from 'react'
import Background from '../../assets/hero-error.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`
}

const NotFound = () => (
  <section style={sectionStyle} className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
        <p className="subtitle is-4 has-text-black has-text-centered">
          Not Found
        </p>
      </div>
    </div>
  </section>
)

export default NotFound