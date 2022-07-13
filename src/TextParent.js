import React, { Component } from 'react'
import TextChild from './TextChild';

export class TextParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
               name:''
        }
    }
   
   
    render() {
        return (
            <div>
           
             <TextChild />
                
            </div>
        )
    }
}

export default TextParent
