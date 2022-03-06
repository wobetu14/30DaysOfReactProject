import React from 'react'
// import ReactDOM from 'react-dom'

// Hexadecimal color generator
const colorGen=()=>{
  let str = '0123456789abcdef'
  let color = ''
  console.log(Math.random());
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#'+color;
}

export default function HexaColor(){
   return (
       <>
    <div style={{padding:'10px', marginBottom:'10px', backgroundColor:`${colorGen()}`, color:'white', textAlign:'center', }}>
        <h1>{colorGen()}</h1>
    </div>

    <div style={{padding:'10px', marginBottom:'10px', backgroundColor:`${colorGen()}`, color:'white', textAlign:'center', }}>
        <h1>{colorGen()}</h1>
    </div>
    <div style={{padding:'10px', marginBottom:'10px', backgroundColor:`${colorGen()}`, color:'white', textAlign:'center', }}>
        <h1>{colorGen()}</h1>
    </div>
    <div style={{padding:'10px', marginBottom:'10px', backgroundColor:`${colorGen()}`, color:'white', textAlign:'center', }}>
        <h1>{colorGen()}</h1>
    </div>
    <div style={{padding:'10px', marginBottom:'10px', backgroundColor:`${colorGen()}`, color:'white', textAlign:'center', }}>
        <h1>{colorGen()}</h1>
    </div>
    <div style={{padding:'10px', marginBottom:'10px', backgroundColor:`${colorGen()}`, color:'white', textAlign:'center', }}>
        <h1>{colorGen()}</h1>
    </div>
       </>
   )
}




