import React,{useState} from "react";
let Numbers = ()=> {

    let [count, setCount] = useState(0)

    

        
      
    return(<div>
        
        <h1> Number of items ={count}  </h1>
        <button onClick={()=> setCount(count+1)}>add item</button>
        <button onClick= {()=> setCount(count-1)}>remove item</button>
        
        
        </div>);
}
export default Numbers;