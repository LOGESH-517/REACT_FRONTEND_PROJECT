import React from 'react'
import {adder} from './cart.js';
import { Button } from '@material-ui/core'
export default function Salad() {
  return (
    <div style={{marginRight:"3.5vw",marginBottom:"8vh",marginTop:"5vh"}}>
         <ul >
                <h4>SALAD</h4>
                <ul style={{marginBottom:"1.5vh"}}>
                    FRIUIT SALAD ~ ₹120&emsp;
                    <Button size="small"  id="addb1" value={120} onClick={adder("addb1","FRIUIT SALAD")} variant="outlined" color="secondary" style={{borderRadius:"35%"}} >ADD</Button>
                </ul>
                <ul style={{marginBottom:"1.5vh"}}>
                    VEGETABLE SALAD ~ ₹80&emsp;
                    <Button size="small" id="addb2" value={80} onClick={adder("addb2","VEGETABLE SALAD")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
            </ul>
    </div>
  )
}
