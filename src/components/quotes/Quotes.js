import React from 'react'
import axios from 'axios'
import QuoteCard from './QuoteCard'
import SearchBar from '../common/SearchBar'
import NotFound from '../common/NotFound'
import Background from '../../assets/hero-error.jpg'

const sectionStyle = {
  width: '100%',
  backgroundImage: `url(${Background})`,
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover'
}

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
      this.props.history.push('/errorpage')
    }
  }

  handleChange = (userInput) => {
    this.setState({ userInput })
  }

  render() {
    const charQuoteArr = this.state.quotes.filter(obj => obj.author.toLowerCase().includes(this.state.userInput.toLowerCase()) && obj.series === 'Breaking Bad')

    console.log(this.state.quotes)
    return (
      <section style={sectionStyle} className="section">
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