import React, { useState } from 'react'
import './testimonials.css'
import { testimonialsData } from '../../pages/testimonialsdata'
import {motion} from 'framer-motion'
const Testimonials = () => {
  const[selected, setselected] = useState(0);
  const tlength = testimonialsData.length;
  const transition = {type:'tween', duration:'2'}
  return (
    <div className="testimonials" id='testimonils'>
        <div className="left-t">
            <span>Testimonials</span> 
            <span className='stroke-text'>What they</span>
            <span>say about us</span>
            <motion.span
            key={selected}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}  
            exit={{opacity:0,x:100}}
            transition={transition}
            >
              {testimonialsData[selected].review}
            </motion.span>
            <span>
              <span style={{color: 'var(--orange)'}}>
                {testimonialsData[selected].name}
              </span>{" "}
              - {testimonialsData[selected].status}
            </span>
        </div>
        <div className="right-t">
          <motion.div
          initial={{opacity:0,x:-100}}
          transition={transition}
          whileInView={{opacity:1,x:0}}
          ></motion.div>
          <motion.div 
          initial={{opacity:0,x:100}}
          transition={transition}
          whileInView={{opacity:1,x:0}}
          ></motion.div>
          <motion.img 
          key={selected}
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-100}}
          transition={transition}
          src={testimonialsData[selected].image} alt="" />
          <div className="arrows">
            <img onClick={()=>{
              if(selected === 0){
                setselected(tlength -1);
              }else{
                setselected(selected -1);
              }
            }} src="images/download11.png"/>
            <img onClick={()=>{
              if(selected === tlength -1){
                setselected(0);
              }else{
                setselected(selected +1);
              }
            }} src="images/download14.png" />
          </div>
        </div>
    </div>
  )
}

export default Testimonials 
