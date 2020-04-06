import React from 'react'
import Background from '../../assets/hero-error.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
}

const NotFound = () => (
  <section style={sectionStyle} className="hero is-fullheight-with-navbar">
    <div className="hero-body">
      <div className="container">
<<<<<<< HEAD
        <p className="subtitle is-2 has-text-white-bis has-text-centered">
          <b>Unknown...</b>
=======
        <p className="subtitle is-4 has-text-black has-text-centered">
          Not Found
>>>>>>> 7e4deea3b30f2d80dc7d501db155eee100a93250
        </p>
      </div>
    </div>
  </section>
)

export default NotFound