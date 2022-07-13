import React from 'react'

function CounterTwo({count,increment}) {
    return (
        <div>
            <button onClick={increment}>count:{count}</button>
        </div>
    )
}

export default CounterTwo
