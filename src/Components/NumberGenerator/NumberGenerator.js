import React from 'react';
import '../NumberGenerator/NumberGenerator.css'

export default function NumberGenerator() {
    const numbers=[];
    for(let i=0; i<=31; i++){
        numbers.push(i);
    }

    const isPrime=(num)=>{
        if(num===1){
            return false;
        }
        for(let i=2; i<num; i++){
            if(num%i===0){
               return false;
            }
        }
        return true;
    }

    const isEven=(num)=>{
        if(num%2===0){
            return true;
        }
        else{
            return false;
        }
    }

    const getBackGroundColor=(num)=>{
        let color='red';
        if(isPrime(num)){
            color='red';
            return color;
        }
        if(isEven(num)===true){
            color='green';
            return color;
        }
        else{
            color='orange';
            return color;
        }
    }

    const list=numbers.map((number)=>
    <div 
        className='number-list' key={number} 
        style={{backgroundColor:getBackGroundColor(number)}}
    >
        {number}
    </div>);

    return (
        <div className='num_box'>
            <p>Evens are <span style={{fontWeight:'bold', color:'green',}}>Green</span></p>
            <p>Odds are <span style={{fontWeight:'bold', color:'orange',}}>Orange</span></p>
            <p>Primes are <span style={{fontWeight:'bold', color:'red',}}>Red</span></p>
            <div className='box-display'>
                {list}
            </div>
        </div>
    )
}
