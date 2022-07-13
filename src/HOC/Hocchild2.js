import React from 'react';
import HocCounter from './HocCounter';

function Hocchild2(props) {
    return (
        <div>
           <h2>my name is: {props.name}</h2>
          <h1 onMouseOver={props.increment}>mouse over {props.counter}</h1>
            
        </div>
    )
}

export default HocCounter(Hocchild2,10);
