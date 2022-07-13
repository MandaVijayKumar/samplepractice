
import React, { Component } from 'react'

export class Practical3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
        console.log(' i am constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('i am getDerivedStateFromProps');
        return {
            ...state,
            counter:props.data*100
        };
    }
    shouldComponentUpdate(){
        console.log(' i am shoud component update')
        return true;
    }
    componentDidMount(){
        console.log('i am component did Mount');

    }
    componentDidUpdate(pp,ps){
        console.log('i am component did update',pp.data,ps.counter);
        console.log('i am comomonent did update',this.props.data,this.state.counter)
    }
    
    render() {
        console.log('i am render');
        return (
            <div>
                <h1> this is practical 3 component{this.state.counter}</h1>
                <button onClick={()=>this.setState({counter:this.state.counter+1})}>Couter++</button>
            </div>
        )
    }
}

export default Practical3
