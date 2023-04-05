import React from 'react'
import {adder} from './cart.js';
import { Button } from '@material-ui/core'
export default function Icecream() {
  return (
    <div style={{marginRight:"3.5vw",marginBottom:"8vh",marginTop:"5vh"}}>
         <ul >
                <h4>ICE CREAMS</h4>
                <ul style={{marginBottom:"1.5vh"}}>
                    VANNILA ~ ₹50 &emsp;
                    <Button size="small"  id="addb1" value={50} onClick={adder("addb1","VANNILA")} variant="outlined" color="secondary" style={{borderRadius:"35%"}} >ADD</Button>
                </ul>
                <ul style={{marginBottom:"1.5vh"}}>
                    CHOCOLATE ~ ₹40&emsp;
                    <Button size="small" id="addb2" value={40} onClick={adder("addb2","CHOCOLATE")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
                <ul style={{marginBottom:"1.5vh"}}> 
                    STRAWBERRY ~ ₹70&emsp;
                    <Button size="small" id="addb3" value={70} onClick={adder("addb3","STRAWBERRY")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
            </ul>
    </div>
  )
}
