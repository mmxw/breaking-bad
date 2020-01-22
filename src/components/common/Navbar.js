import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  state = { navOpen: false }



  render() {
    return (
      <>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/characters'>Characters</Link>
        </nav>
      </>
    )
  }

}

export default Navbar