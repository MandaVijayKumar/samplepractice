import React from 'react'

function Counter3(props) {
    return (
        <div>
        <h1>counter3 value is : {props.count}</h1>
        <button onClick={props.increment}>increment</button>
        </div>
    )
}

export default Counter3
