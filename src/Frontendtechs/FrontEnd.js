import React from 'react';
import HTMLLogo from '../Components/images/HTML5 logo.png' 
import CSSLogo from '../Components/images/CSS 3 logo.png' 
import JavaScriptLogo from '../Components/images/JavaScript logo.jpg' 
import ReactLogo from '../Components/images/React logo.png'
import './FrontEnd.css'

export default function FrontEnd() {
  return (
  <div>
    <div className='front-end'>
      <h1 style={{textAlign:"center"}}>Frontend Technologies</h1>
        <div className='front-end-techs'>
          <div className='logos'>
            <img className='logo' src={HTMLLogo} alt=''/>
          </div>
          <div className='logos'>
            <img className='logo' src={CSSLogo} alt=''/>
          </div>
          <div className='logos'>
              <img className='logo' src={JavaScriptLogo} alt=''/>
          </div>
          <div className='logos'>
              <img className='logo' src={ReactLogo} alt=''/>
          </div>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div className='skills'>
      <label label="html" className='skill'>HTML</label>
      <label label="html" className='skill'>CSS</label>
      <label label="html" className='skill'>JavaScript</label>

      <label label="html" className='skill'>HTML</label>
      <label label="html" className='skill'>CSS</label>
      <label label="html" className='skill'>JavaScript</label>
    </div>
  </div>
  )
}

