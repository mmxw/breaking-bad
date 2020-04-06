import React from 'react'

const SearchBar = ({ onChange }) => (
<<<<<<< HEAD
  <div className="columns is-centered">
    <div className="control column is-half">
      <input
        type="text"
        className="input"
        placeholder="Search..."
        onChange={e => {
=======
  <div className="field has-addons">
    <div className="control">      
      <input 
        type="text"
        className="input" 
        placeholder="Search..." 
        onChange={ e => {
>>>>>>> 7e4deea3b30f2d80dc7d501db155eee100a93250
          const userInput = e.target.value
          onChange(userInput)
        }}
      />
    </div>
  </div>
<<<<<<< HEAD
=======
  
>>>>>>> 7e4deea3b30f2d80dc7d501db155eee100a93250
)

export default SearchBar