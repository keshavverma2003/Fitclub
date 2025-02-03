import React from 'react'
import './plans.css'
import {plansData} from '../../pages/plansdata'
const Plans = () => {
  return (
    <div className='plans-container' id='plan'>
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
        <div className="program-header" style={{gap:'2rem'}}>
            <spna className = "stroke-text">Ready to Start</spna>
            <spna>Your Journey</spna>
            <spna className = "stroke-text">now withus</spna>
        </div>
        {/* plans card */}
        <div className="plans">
          {plansData.map((plan,i)=>(
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>
              <div className="features">
                {plan.features.map((feature,i)=>(
                  <div className="feature">
                    <img src="/images/download13.png" alt="" />
                    <span key={i}>{feature}</span>
                  </div>
                ))}
              </div>
              <div>
                <spna>See more benefits -></spna>
              </div>
              <button className="btn">
                Join now
              </button>
            </div>
          ))}
        </div> 
    </div>
  ) 
}

export default Plans
