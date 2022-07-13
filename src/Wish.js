import React,{useState} from "react";
let Wish = () =>{
    let[Message,setMessage]=useState("HELLO")

   
    let updateMessage = (msg)=> {
        setMessage(msg);


    }


    return(
        <div className="bg-info">
        <h1>{Message}</h1>
        <button className="btn btn-primary" onClick={updateMessage.bind(this,"GOOD MORNING")}>Morning</button>
        <button className="btn btn-secondary" onClick={updateMessage.bind(this,"GOOD AFTERNOON")}>Afternoon</button>
        <button className="btn btn-danger" onClick={updateMessage.bind(this,"GOOD NIGHT")}>Night</button>
        </div>
    );
}

export default Wish;