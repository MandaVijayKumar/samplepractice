import React,{useState} from "react";

let Display = ()=> {

    let[message,setMessage]=useState("HELLO");
    let[pass,setPass]=useState(true);
    let updateMessage = ()=>{
        if(pass===true){
           setMessage("MEHATAB");
           setPass(!pass);
        }
        else {
            setMessage("NAAZ");
            setPass(!pass);
        }
    
    }

    return(

        <div>
        <h1>{message}</h1>
        <button onClick={updateMessage}>CLICK ME</button>
        </div>
    );
}
export default Display;