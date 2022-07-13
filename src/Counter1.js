import React from 'react';
import Counter2 from './Counter2.js';
import Counter3 from './Counter3.js';
import Counter4 from './Counter4.js';

function Counter1() {
    return (
        <div>
            <h1>this couter1</h1>
            <Counter4 render = {(count,increment)=><Counter2 count={count} increment={increment}/>}/>
            <Counter4 render = {(count,increment)=><Counter3 count={count} increment={increment}/>}/>
        </div>
    )
}

export default Counter1;
