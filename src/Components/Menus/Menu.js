import React from 'react'
import '../Menus/Menu.css'
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <div>
     <ul className='menu_ul'>
         <li><Link to={'/'}>HOME </Link></li>
         <li><Link to={'/excercises'}>EXERCISES </Link></li>
         <li><Link to={'/cats-paradise'}>CAT'S PARADISE</Link></li>
         <li><Link to={'/countries-api'}>COUNTRIES API</Link></li>
     </ul> 
    </div>
  )
}

export default Menu