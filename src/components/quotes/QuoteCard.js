import React from 'react'

const QuoteCard = ({ quote, author, series }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <div className="card">

      <h4>{quote}</h4>
      <h5>{author}</h5>
      <h5>{series}</h5>

    </div>
  </div>
)

export default QuoteCard