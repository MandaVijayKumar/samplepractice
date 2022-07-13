import React from 'react'

function CounterOne({count,increment}) {
    return (
        <div>
           <button onClick={increment}>count:{count}</button>
            
        </div>
    )
}

export default CounterOne
