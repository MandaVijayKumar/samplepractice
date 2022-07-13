import React, { Fragment,useState } from 'react';
import FourthQ from './FourthQ.js'
import FifthQ from './FifthQ.js'
import SixthQ from './SixthQ.js'
let SecondQ = ()=>{
    let [temperature,setTemperature]=useState("")
    if(temperature==="normal")
    {
        return(<div><FourthQ/></div>)
    }
    if(temperature==="medium")
    {
        return(<div><FifthQ/></div>)
    }
    if(temperature==="high") {
        return(<div><SixthQ/></div>)
    }
    return(<Fragment>
        <div className=" bg-info  mt-2">
        <h1 className="bg-secondary text-warning">Que: what is your body temperature?</h1>
        <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" onClick={()=>{setTemperature("normal")}} id="customRadioInline1" name="customRadioInline1" class="custom-control-input" value="normal"/>
              <label class="custom-control-label" for="customRadioInline1">NORMAL</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" onClick={()=>{setTemperature("medium")}} id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="medium"/>
            <label class="custom-control-label" for="customRadioInline2">MEDIUM</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" onClick={()=>{setTemperature("high")}} id="customRadioInline2" name="customRadioInline1" class="custom-control-input" value="high"/>
            <label class="custom-control-label" for="customRadioInline2">HIGHT</label>
        </div>
        </div>
        
        
        </Fragment>)

    }
    export default SecondQ;