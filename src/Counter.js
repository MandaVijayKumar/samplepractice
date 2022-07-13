import React,{useState} from "react";
let Counter = ()=> {

    let [count, setCount] = useState(0)

      let increament = () =>{

          setCount(count+1);
          console.log(count)
    }
      let decrement = ()=> {
          if(count>0)
          {
              setCount(count-1);
          }
         
          console.log(count);
      }
    return(<div>
        
        <h1> my count value is{count}  </h1>
        <button onClick={increament}>add</button>
        <button onClick= {decrement}>sub</button>
        
        
        </div>);
}
export default Counter;