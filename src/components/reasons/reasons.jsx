import React from 'react'
import './reasons.css'
const Reasons = () => {
  return (
    <>
      {/* this page is left side */}
      <div className="Reasons" id='reasons'>
        <div className="left-r">
          <img src="/images/download16.png" alt="" />
          <img src="/images/download17.png" alt="" />
          <img src="/images/download18.png" alt="" />
          <img src="/images/download19.png" alt="" />
        </div>

        {/* this page is right side */}
        <div className="right-r">
          <span>some reasons</span>
          <div>
            <span className='stroke-text'>why</span>
            <span>choose us?</span>
          </div>
          <div className='details-r'>
            <div>
              <img src="/images/download10.png" alt=""></img>
              <span>over 140+ expert coachs</span>
            </div>
            <div>
              <img src="/images/download10.png" alt="" />
              <span>train smarter and faster than before</span>
            </div>
            <div>
              <img src="/images/download10.png" alt="" />
              <span>1 free program for new member</span>
            </div>
            <div>
              <img src="/images/download10.png" alt="" />
              <span>reliable partners</span>
            </div>
          </div>
          <span style={{ color: "var(--gray)", fontWeight: "normal" }}>OUR PARTNERS</span>
          <div className="partners">
            <img src="/images/download12.png" alt="" />
            <img src="/images/download7.png" alt="" />
            <img src="/images/download6.png" alt="" /> 
          </div>
        </div>
      </div>
    </>
  )
} 

export default Reasons