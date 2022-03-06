import React from 'react'
import Menu from '../Menus/Menu'
import '../Headers/Header.css'

function Header() {
  return (
    <div className='header__appinfo'>
       <h1>30 Days of React Tutorial</h1>
       <p><strong>Instructor:</strong> Asabeneh Shitahun </p>
       <p><strong>Project By:</strong> Wobetu Shiferaw</p>
       <Menu />
    </div>
  )
}

export default Header