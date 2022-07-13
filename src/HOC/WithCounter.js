import React from 'react'
import { render } from 'react-dom'

 let  Hoc = (WrapperComponent)=> {
    
    
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 counter:0
            }
        }
        increment = ()=>{
            this.setState((ps)=>{return{counter:ps.counter  + 1}});
        }
        render() {
            return (
                <div>
                <WrapperComponent counter={this.state.counter} increament={this.increment}/>
                <WrapperComponent counter = {this.state.counter} increament={this.increment}/>
                    
                </div>
            )
        }
    }
    
   
    
    
    return (
        <WithCounter/>
    )
}

export default Hoc;
