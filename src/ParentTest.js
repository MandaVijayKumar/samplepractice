
import React, { } from 'react'
import { Component } from 'react';
import ChildTest from './ChildTest';
 class ParentTest extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'vijay'
         }
     }
     componentDidMount(){
         setInterval(()=>{
             this.setState({name:'kumar'});
              console.log(' i am set interval');

         },2000)
     }
     
    render() {
        console.log(' i am render');
        return (
            <div>
                <h1> i am {this.state.name}</h1>
                <ChildTest name={this.state.name}/>
            </div>
        )
    }
}

export default ParentTest
