import React from 'react'
import Counter from './Counter';
import CounterOne from './CounterOne';
import CounterTwo from './CounterTwo';

function MainCounter() {
    return (
        <div>
            <Counter render = {(count,increment)=><CounterOne count = {count} increment = {increment}/>}/>
            <Counter render = {(count,increment)=><CounterTwo count={count} increment = {increment}/>}/>
        </div>
    )
}

export default MainCounter
