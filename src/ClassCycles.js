import React from 'react';

class ClassCycles extends React.Component{
    constructor(props){
        super(props)
        this.state({
            counter:0
        })
        console.log('i am constructor')
    }
    shouldComponentUpdate(){
        console.log(' i am shoud component should update')
    }
    componentDidMount(){
        console.log('i am componentDidMount')
    }

    render(){
        console.log('i am render');
        return(<div>
                 
                 <h1>this is life cycle method component</h1>
            
            </div>)
    }
}
export default ClassCycles;