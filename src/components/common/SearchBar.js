import React from 'react'


const SearchBar = ({ onChange }) => (
  <div className="field has-addons">
    <div className="control">      
      <input 
        type="text"
        className="input" 
        placeholder="Search..." 
        onChange={ e => {
          const userInput = e.target.value
          onChange(userInput)
        }}
      />
    </div>
  </div>
  
)

export default SearchBar