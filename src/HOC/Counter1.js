
import React, { Component } from 'react'
import Hoc from './WithCounter';
import withCounter from './WithCounter';

export class Counter1 extends Component {
    
    
    render() {
        let {counter,increment} = this.props;
        return (
            <div>
                   <h1>Click Counter{counter}</h1>
                   <button onClick={increment}>increase1</button>
            </div>
        )
    }
}

export default Hoc ( Counter1);
