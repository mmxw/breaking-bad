import React from 'react'
class SearchBar extends React.Component {

  state = {
    characters: null
  }

  async componentDidMount() {
    try {
      
      const result = this.state.characters.filter(character => this.handleSearch)
    }
  }

  handleSearch = (e, userInput) => {
    userInput.toLowerCase().search(
      e.target.value.toLowerCase()) !== -1
  }

  

  render() {
    return (
      <div>
        <form>
          <fieldset>
            <input type="text" placeholder="Search by character name" onChange={} />
          </fieldset>
        </form>
        <List items={this.state.items} />
      </div>
    )
  }
}
export default SearchBar