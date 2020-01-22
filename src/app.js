import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bulma'

import Home from './components/common/Home'
import NotFound from './components/common/NotFound'

import CharacterView from './components/characters/CharacterView'
import Navbar from './components/common/Navbar'
import CharacterIndex from './components/characters/CharacterIndex'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/characters/:id' component={CharacterView} />
            <Route path="/characters" component={CharacterIndex} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)