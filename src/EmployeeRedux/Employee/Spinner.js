import React,{Fragment} from 'react';
import spin from './snip.png';
let Spinner = ()=>{
    return(<Fragment>
           <img src={spin} alt=" " style={{display:'block',width:'100px', height:'100px' }}/>
        </Fragment>)
}
export default Spinner;