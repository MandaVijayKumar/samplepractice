import React from 'react'
import HocCounter from './HocCounter';

function Hocchild1({counter,increment,name}) {
    return (
        <div>
                <h1>my name is:{name} </h1>
            <button onClick={increment}> clicked{counter} </button>
            
        </div>
    )
}

export default HocCounter(Hocchild1,5);
