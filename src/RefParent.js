import React, { Component } from 'react'
import RefName1 from './RefName1';

export class RefParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.currentRef = React.createRef();

    }
    parentHandler = ()=>{
        this.currentRef.current.clickHandler();
    }
    
    render() {
        return (
            <div>
            <RefName1 ref={this.currentRef}/>
            <button onClick={this.parentHandler}>click me</button>
                
            </div>
        )
    }
}

export default RefParent
