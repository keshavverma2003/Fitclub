// only main default page hero //
import React from 'react';
import './hero.css'
import Header from '../header/header';
import {delay, motion} from 'framer-motion';
import Numbercounter from 'number-counter'
const Hero = () => {
  const transition = {type: 'tween', duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <>
      <div className='hero' id='home'>
        <div className='left-h'>
          <Header />
          <div className='blur hero_blur'></div>
          {/* the best ad */}
          <div className='the-best-ad'>
            <motion.div
            initial = {{left:mobile? "168px":"238px"}}
            whileInView={{left :'20px'}}
            transition={transition}
            ></motion.div>
            <span>the vest fitness clud in the town</span>
          </div>
          {/* hero text */}
          <div className="hero-text">
            <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div>
            <div>
              <span>Ideal body</span>
            </div>
            <div>
              <span>
                In here we will help you to shape and build your ideal body and live up your life to fullest
              </span>
            </div>
          </div>
          {/* figures */}
          <div className="figures">
            <div>
              <span><Numbercounter end={140} start={100} delay="4" preFix="+"/></span>
              <span>expert coachs</span>
            </div>
            <div>
              <span><Numbercounter end={998} start={800} delay="4" preFix="+"/></span>
              <span>members joined</span>
            </div>
            <div>
              <span><Numbercounter end={50} start={0} delay="4" preFix="+"/></span>
              <span>fitness programs</span>
            </div>
          </div>
          {/* hero Button */}
          <div className="hero-btn">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
          </div>
        </div>
        {/* right side */}
        <div className='right-h'>
          <button className='btn'>Join Now</button>

          {/* heart rate */}
          <motion.div 
          initial = {{right:"-1rem"}}
          whileInView={{right:"4rem"}}
          transition={transition}
          className='heart-rate'>
            <img src="/images/download9.png" alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>

          {/* hero image */}
          <img src="/images/heroimage.png" alt="" className='hero-image' />
          <motion.img 
          initial = {{right:"11rem"}}
          whileInView={{right:"20rem"}}
          transition={transition}
          src="/images/download15.png" alt="" className='hero-imageback' />

          {/* calories */}
          <motion.div 
          initial = {{right:"37rem"}}
          whileInView={{right:"25rem"}}
          transition={transition}
          className="calories">
            <img src="/images/download5.png" alt="" />
            <motion.div>
              <span>Calories Burned</span>
              <span>220 Kcal</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Hero
