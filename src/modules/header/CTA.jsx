import React from 'react'
import CV from '../../assets/Orbel Baghdasian Resume.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Socials</a>
    </div>
  )
}

export default CTA