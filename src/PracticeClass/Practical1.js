import React from 'react';
import Practical2 from './Practical2';

class Practical1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            show:true
        }
        console.log('this is constructor')
    }
  
  
  
    render(){
          console.log('this is render')
        return(
            <div>
            <h1>this is practical one component{this.state.counter}</h1>
            <Practical2 data = {this.state.counter}/>
            <button onClick={()=>this.setState((ps)=>{return{counter:ps.counter+1}})}>Counter++</button>
            </div>
        )
    }
}
export default Practical1;