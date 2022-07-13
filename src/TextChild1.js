import React, { Component } from 'react'

export class TextChild1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h1>this child compoment regular {this.props.value}</h1>
            </div>
        )
    }
}

export default TextChild1
