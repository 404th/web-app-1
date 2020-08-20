import React from 'react'
import './Footer.css'

const Footer = () => {

  return (
    <div className="footer">
      <div className='container'>
        <span className='text-muted'>Our web-site &#169; { new Date().getFullYear() } </span>
      </div>
    </div>
  )

}

export default Footer