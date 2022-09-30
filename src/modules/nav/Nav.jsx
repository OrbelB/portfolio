import React from 'react'
import './nav.css'
import {RiHomeLine} from 'react-icons/ri'
import {RiUser4Line} from 'react-icons/ri'
import {AiOutlineCode} from 'react-icons/ai'
import {VscPlay} from 'react-icons/vsc'
import {BiMessageSquareMinus} from 'react-icons/bi'
const nav = () => {
  return (
    <nav>
      <a href='#'><RiHomeLine/></a>
      <a href='#about'><RiUser4Line/></a>
      <a href='#experience'><AiOutlineCode/></a>
      {/* services --> portfolio */}
      <a href='#portfolio'><VscPlay/></a>
      <a href='#contact'><BiMessageSquareMinus/></a>



    </nav>
  )
}

export default nav