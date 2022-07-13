import React, { Component } from 'react'
import Hoc from './WithCounter';
import withCounter from './WithCounter';

export class Counter2 extends Component {
    
    render() {
        let {counter,increment} = this.props;
       
        return (
            <div>
                <h1>this is counter two{counter}</h1>
                <button onClick={increment}>increment2</button>
            </div>
        )
    }
}

export default Hoc ( Counter2);
