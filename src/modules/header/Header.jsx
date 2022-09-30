import React from 'react'
import './header.css'
import CTA from './CTA'
import Self from '../../assets/self-u.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Orbel B</h1>
        <h5 className='text-light'>Software Engineer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='self_img'>
            <img src={Self} alt='self' />
        </div>
        <h1 className='hello_sign'>Hello World!</h1>
        <div className='scroll__down'>
          <a href="#contact"> Scroll Down</a>
        </div>
      </div>
    </header>
  )
}

export default header