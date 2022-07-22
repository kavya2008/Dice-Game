import React from "react";
import './Die.css'
export const Die=({face,rolling,rollingtwo})=>{
return(
    <i className={`die fas fa-dice-${face} ${rolling &&'shaking'} ${rollingtwo && 'shaking'}`}></i>
)
}