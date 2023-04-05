import React from 'react'
import {adder} from './cart.js';
import { Button } from '@material-ui/core'
export default function Coffee() {
  return (
    <div style={{marginRight:"3.5vw",marginBottom:"8vh",marginTop:"5vh"}}>
         <ul >
                <h4>COFFEE</h4>
                <ul style={{marginBottom:"1.5vh"}}>
                    HOT COFFEE ~ ₹50&emsp;
                    <Button size="small"  id="addb1" value={50} onClick={adder("addb1","HOT COFFEE")} variant="outlined" color="secondary" style={{borderRadius:"35%"}} >ADD</Button>
                </ul>
                <ul style={{marginBottom:"1.5vh"}}>
                    COLD COFFEE ~ ₹40&emsp;
                    <Button size="small" id="addb2" value={40} onClick={adder("addb2","COLD COFFEE")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
                <ul style={{marginBottom:"1.5vh"}}> 
                    CAPUCCINO ~ ₹70&emsp;
                    <Button size="small" id="addb3" value={70} onClick={adder("addb3","CAPUCCINO")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
            </ul>
    </div>
  )
}
