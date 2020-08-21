import React from 'react'
import './JumbotronStyle.css'

const JumbotronJum = props => {
  return (
    <div className='jumbotron jumbotronJum'>
      <div className='container'>
        <h1>{ props.title }</h1>
        <p>{ props.subtitle }</p>
      </div>
    </div>
  )
}

export default JumbotronJum