import React, { useState } from "react";
let Marks = ()=>{

    let [scoreData,setScoreData] = useState([33,23,43,13,53,63,73])

     console.log(scoreData)
    return(<div>
        <h1>this marks component</h1>
        <p> length of array is{scoreData.length}</p>

        <ul>
        {
            scoreData.map((value)=>{
                return( 
                    <li>{value}</li>)
                   
            })





        }

        
        </ul>
        
        
        </div>)
}
export default Marks;