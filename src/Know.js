import React from "react";
import './App.css'
import {useNavigate} from 'react-router-dom'
function Know(){
  const navigate=useNavigate()
    return(
        
        <div className='hist'>
          <div className="bx">
        <h1 style={{color:"red"}}>History </h1>
          <p>Dice have been used since before recorded history, and it is uncertain where they originated. It is theorized that dice developed from the practice of fortune-telling with the talus of hoofed animals, colloquially known as knucklebones.<br></br> The Egyptian game of senet was played with flat two-sided throwsticks which indicated the number of squares a player could move, and thus functioned as a form of dice. Senet was played before 3000 BC and up to the 2nd century AD. Perhaps the oldest known dice were excavated as part of a backgammon-like game set at the Burnt City, an archeological site in south-eastern Iran, estimated to be from between 2800 and 2500 BC.<br></br>Bone dice from Skara Brae, Scotland have been dated to 3100–2400 BC.Excavations from graves at Mohenjo-daro, an Indus Valley civilization settlement, unearthed terracotta dice dating to 2500–1900 BC.</p>
      </div>
      <button className="btn" onClick={()=>navigate('/')}>Back</button>
      </div>
    )
}
export default Know

