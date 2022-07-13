import React from 'react';
import Practical3 from './Practical3';

class Practical2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    increment = ()=>{
        this.setState((prevState)=>{return {count:prevState.count + 1}})
    }
   
  

    render(){
        return(<div>
               
              <h2>this is Practical component2 count:{this.state.count}</h2>
              <Practical3 data={this.state.count}/>
              <button onClick={this.increment}>count++</button>
            </div>)
    }
}
export default Practical2;