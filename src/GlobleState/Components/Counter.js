import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import {counterActions} from '../features/counterSlice'
function Counter() {
    let dispatch = useDispatch();
    const counter = useSelector((state) => {
        return state.Counter.counter;
    })
  return (
    <div>Counter = {counter}


        <Button variant='success' onClick={()=>dispatch(counterActions.increment(5))}>increment by 5</Button>
    </div>
  )
}

export default Counter