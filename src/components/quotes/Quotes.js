import React from 'react'
import axios from 'axios'
import QuoteCard from './QuoteCard'
import SearchBar from '../common/SearchBar'
import NotFound from '../common/NotFound'

class Quotes extends React.Component {
  state = {
    quotes: [],
    userInput: ''
  }

  async componentDidMount() {
    try {
      const quotes = await axios.get('https://breakingbadapi.com/api/quotes')
      console.log(quotes.data)
      this.setState({ quotes: quotes.data })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (userInput) => {
    this.setState({ userInput })
  }

  render() {
    const charQuoteArr = this.state.quotes.filter(obj => obj.author.toLowerCase().includes(this.state.userInput.toLowerCase())) //TODO

    console.log(this.state.quotes)
    return (
      <section className="section">
        <div className="container">
          <SearchBar onChange={ this.handleChange } />
          <div className="columns is-mobile is-multiline">
            {charQuoteArr.length === 0 && this.state.userInput ?
              <NotFound /> :
              charQuoteArr.map(quote => <QuoteCard key={quote.quote_id} {...quote} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Quotes