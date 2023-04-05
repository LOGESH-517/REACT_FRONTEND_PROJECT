import React from 'react'
import {adder} from './cart.js';
import { Button, Tab } from '@material-ui/core'
export default function Tea() {
  return (
    <div style={{marginRight:"3.5vw",marginBottom:"8vh",marginTop:"5vh"}}>
         <ul>
                <h4>TEA</h4>
                <ul style={{marginBottom:"1.5vh"}}>
                    BLACK TEA ~ ₹60&emsp;
                    <Button size="small"  id="addb1" value={60} onClick={adder("addb1","BLACK TEA")} variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button>
                </ul>
                <ul style={{marginBottom:"1.5vh"}}>
                    GREEN TEA ~ ₹20&emsp;
                    <Button size="small" id="addb2" value={20} onClick={adder("addb2","GREEN TEA")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
                <ul style={{marginBottom:"1.5vh"}}> 
                    WHITE TEA ~ ₹120&emsp;
                    <Button size="small" id="addb3" value={120} onClick={adder("addb3","WHITE TEA")}variant="outlined" color="secondary" style={{borderRadius:"35%"}}>ADD</Button> 
                </ul>
            </ul>
    </div>
  )
}
