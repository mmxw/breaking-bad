import React from 'react'

const QuoteCard = ({ quote, author }) => (

  <div className="column is-half-desktop is-one-third-tablet is-full-mobile">
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">{author}</h4>
      </div>
      <div className="card-content">
        <p><i>"{quote}"</i></p>
      </div>
    </div>
  </div>
)

export default QuoteCard