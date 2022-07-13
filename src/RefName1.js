import React, { Component } from 'react'

export class RefName1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.inputRef = React.createRef();
    }
        clickHandler = ()=>{
            this.inputRef.current.focus();
        }
    
    render() {
        return (
            <div>
                <input ref = {this.inputRef} type="text" />
                <button onClick={()=>alert(this.inputRef.current.value)}>click</button>
            </div>
        )
    }
}

export default RefName1
