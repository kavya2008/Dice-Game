import React from "react";
import './App.css';
import pic from "./dice.jpg"
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import Know from "./Know";
function Home(){
   
const navigate=useNavigate()
const handleClick = () => {
 
};
    return(
        <div className="home">
        <div className='contain'>
        <div className='col1'>
        <div class="content">
            <h1 style={{color:"red"}}>Welcome To</h1>
            <h3 class="animate-charcter"> DICE PLAY</h3>
  </div>
          <img src={pic} className="imge"></img>
          
        </div>
       
        <div className='col3'>
          <button onClick={()=>navigate('know')} className="btn">Know More</button>
          <button onClick={()=>navigate('page')} className="btn">Play</button>
        </div>
      </div>
      </div>
    )
}
export default Home