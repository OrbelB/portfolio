import React from 'react'
import { FiLinkedin } from 'react-icons/fi';
import {FiGithub} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/orbel-baghdasian/' target="_blank"> <FiLinkedin/></a>
        <a href='https://github.com/OrbelB' target="_blank"><FiGithub/></a>
    </div>
  )
}

export default HeaderSocials