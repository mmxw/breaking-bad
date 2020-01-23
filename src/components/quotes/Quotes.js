import React from 'react'
import axios from 'axios'
import QuoteCard from './QuoteCard'

class Quotes extends React.Component {
  state = {
    quotes: null
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

  render() {
    if (!this.state.quotes) return null
    console.log(this.state.quotes)
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline">
            {this.state.quotes.map(quote => <QuoteCard key={quote.quote_id} {...quote} />)}
          </div>
        </div>
      </section>
    )
  }
}

export default Quotes