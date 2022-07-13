import React, { Component } from 'react'
import { PureComponent } from 'react'

 class TextState extends PureComponent {
        constructor(props) {
            super(props)
        
            this.state = {
                data:0
            }
            
        }
        
        
        
        
    render() {
     
        console.log('i am pure component');
        
       
        return (
            <div>
               <h1>my props count is :{this.props.value}</h1>
            
                
            </div>
        )
    }
}

export default TextState
