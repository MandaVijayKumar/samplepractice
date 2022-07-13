import React,{useState} from 'react'

function Counter4(props) {
    const [count, setCount] = useState(0);

     let increment = ()=>{
         setCount((pcount)=>pcount+1)
     }
    return (
          
        <div>
            <h1>counter 4......</h1>
            {
                props.render(count,increment)
            }
        </div>
    )
}

export default Counter4
