import React from 'react'
import {adder} from './cart.js';
import { Button } from '@material-ui/core'
export default function Milkshake() {
  return (
    <div style={{marginRight:"3.5vw",marginBottom:"8vh",marginTop:"5vh"}}>
         <ul >
                <h4>MILKSHAKES</h4>
                <ul style={{marginBottom:"1.5vh"}}>
                    ROSE MILK ~ ₹30&emsp;
                    <Button size="small"  id="addb1" value={30} onClick={adder("addb1","ROSE MILK")} variant="outlined" color="secondary" style={{borderRadius:"35%"}} >ADD</Button>
                </ul>
                <ul style={{marginBottom:"1.5vh"}}>
                    CHOCOLATE MILKSHAKE ~ ₹70&emsp;
                    <Button size="small" id="addb2" value={70} onClick={adder("addb2","CHOCOLATE MILKSHAKE")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
            </ul>
    </div>
  )
}
