import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className="footer_container">
      <hr />
      <div className="footer">
        <div className='social_link'>
          <img src="/images/download2.png" alt="" />
          <img src="/images/download1.png" alt="" />
          <img src="/images/download3.png" alt="" />
        </div>
        <div className="logo_f">
          <img src="/images/download4.png" alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer
