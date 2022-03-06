import React from 'react'
import '../Components/Excercises.css'
import FrontEnd from '../Frontendtechs/FrontEnd'
import NumberGenerator from './NumberGenerator/NumberGenerator'
import HexaColor from './RandomColor'

function Excercises() {
  return (
    <div style={{marginTop:"40px", textAlign:'center'}}>

      <h1 className='excercises__title'E>FRONTEND TECHNOLOGIES</h1>
        <FrontEnd />

        <br /><br />

        <h1 className='excercises__title'E>RANDOM COLOR GENERATOR</h1>
        <HexaColor />

        <h1 className='excercises__title'E>NUMBER GENERATOR</h1>
        <NumberGenerator />

        <br /><br />
    </div>
  )
}

export default Excercises