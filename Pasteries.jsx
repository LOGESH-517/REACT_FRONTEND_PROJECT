import React from 'react'
import {adder} from './cart.js';
import { Button } from '@material-ui/core'
export default function Pasteries() {
  return (
    <div style={{marginRight:"3.5vw",marginBottom:"8vh",marginTop:"5vh"}}>
         <ul>
                <h4>    PASTERIES</h4>
                <ul style={{marginBottom:"1.5vh"}}>
                    CHOCOLATE TRUFFLE ~ ₹150&emsp;
                    <Button size="small"  id="addb1" value={150} onClick={adder("addb1","CHOCOLATE TRUFFLE")} variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button>
                </ul>
                <ul style={{marginBottom:"1.5vh"}}>
                    VANILLA CUP CAKES ~ ₹50&emsp;
                    <Button size="small" id="addb2" value={50} onClick={adder("addb2","VANILLA CUP CAKES")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
                <ul style={{marginBottom:"1.5vh"}}> 
                    BUTTERSCOTCH ICE CREAMS ~ ₹100&emsp;
                    <Button size="small" id="addb3" value={100} onClick={adder("addb3","BUTTERSCOTCH ICE CREAMS")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
            </ul>
    </div>
  )
}
