import React, { useState } from "react";
import { Die } from "./Die";

import { useForm } from "react-hook-form";
 const Rolldie=({sides})=>{
    const { register, handleSubmit, formState: { errors }} = useForm();
  const onSubmit = data => console.log(data);
  const handle=(event)=>{
    event.preventDefault();
  }
    const [stateone,setstateone]=useState({
        die1:"one",
        rolling:false,
        totalscore:0,
    });
    const [stateotwo,setstatetwo]=useState({
        die2:"two",
        rollingtwo:false,
        totalscoretwo:0,
    });
    const [name1,setname1]=useState('');
    const [name2,setname2]=useState('');
    const{die1,rolling,totalscore}=stateone;
    const{die2,rollingtwo,totalscoretwo}=stateotwo;
    const roll=()=>{
        const newdialone=sides[Math.floor(Math.random()*sides.length)]
        const scoreone=Object.values(newdialone);
        setstateone({
            die1:Object.keys(newdialone),
            rolling:true,
            totalscore:totalscore+scoreone[0]
        })
        setTimeout(()=>{
           setstateone((prevstate)=>({...prevstate,rolling:false}))
        },1000)
    }
    const rolltwo=()=>{
        const newdialtwo=sides[Math.floor(Math.random()*sides.length)]
        const scoretwo=Object.values(newdialtwo);
        setstatetwo({
            die2:Object.keys(newdialtwo),
            rollingtwo:true,
            totalscoretwo:totalscoretwo+scoretwo[0]
        })
        setTimeout(()=>{
           setstatetwo((prevstate)=>({...prevstate,rollingtwo:false}))
        },1000)
    }
    const handleClick = event => {
        event.preventDefault();
        setname1("");
    }
    const reset=()=>{
        setstateone({
            die1:"one",
            rolling:false,
            totalscore:0
        })
        setstatetwo({
            die2:"two",
        rollingtwo:false,
        totalscoretwo:0,
        })
        
    }
return(
    <div className="rolldice">
        <div className='col2'>
          
          
         
         <form onSubmit={handleSubmit(onSubmit)}>
        <input
        placeholder="Enter Player1 name"
          name="message"
          autoComplete="off"
          {...register("message", {
            required: "Please Enter Name",
          })}
          onChange={event => setname1(event.target.value)} className="input"></input>
        <br></br>

        {errors.message && errors.message.message}
        <br></br>
        <input
        placeholder="Enter Player2 name"
          name="messagetwo"
          autoComplete="off"
          {...register("messagetwo", {
            required: "Please Enter Name",
          })}
          onChange={event => setname2(event.target.value)} className="input"></input>
        <br></br>
        {errors.message && errors.message.message}<br></br>
        <input type="submit" className="butn" />
      </form>
        </div>
        {totalscore<15 && totalscoretwo<15 && <p style={{color:"red",fontFamily:"Roboto",marginTop:"40px"}}>Get Score More Than 15 To Win The game</p>}
        
        <div className="rollcontainer">
            <div className="box1">
        <label>Player 1 : <h3 className="nme">{name1}</h3></label>
        <label>Player 2 :<h3 className="nme">{name2}</h3></label>
        </div>
        <div className="box2">
        <Die face={String(die1)} rolling={rolling}></Die>
        <Die face={String(die2)} rollingtwo={rollingtwo}></Die>
        </div>
        
        <div className="box3">
        <button onClick={roll} disabled={rolling} className="butn">{rolling?"Rolling...":"Roll Die 1"}</button>
        <button onClick={rolltwo} disabled={rollingtwo} className="butn">{rollingtwo?"Rolling...":"Roll Die 2"}</button>
        </div>
        <div className="box4">
        <p>Total Score : <span className="total">{totalscore}</span></p>
       
       
        <p >Total Score : <span className="total">{totalscoretwo}</span></p>
        </div>
        </div>
      
        {totalscore>=15 && totalscoretwo<15 && <div><h1 className="dv"><span>{name1} </span><span>Wins</span></h1>
       <button onClick={reset}className="butn">Reset</button>
        </div>
        }
        {totalscoretwo>=15 && totalscore<15 && <div><h1 className="dv"><span>{name2}</span><span> Wins</span></h1>
         <button onClick={reset} className="butn">Reset</button>
        </div>
        }
    </div>
)}
Rolldie.defaultProps={sides:[{one:1},{two:2},{three:3},{four:4},{five:5},{six:6}]}
export default Rolldie