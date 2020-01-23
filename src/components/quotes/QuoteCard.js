import React from 'react'

const QuoteCard = ({ quote_id, quote, author, series }) => (

  <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile">
    <div className="card">
      <div className="card-header">
        <h4 className="card-header-title">Quote no: {quote_id}</h4>
      </div>
      <div className="card-content">
        <p>Quote line: {quote}</p>
        <p>From: {author}</p>
        <p>Series: {series}</p>
      </div>
    </div>
  </div>
)

export default QuoteCard