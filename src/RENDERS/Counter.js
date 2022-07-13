import React from 'react';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    increment = ()=>{
        this.setState((ps)=> {return {count:ps.count + 1} } )
    }
    render() {
        return(<>
                {
                    this.props.render(this.state.count,this.increment)
                }
            
            
            </>)
    }
}
export default Counter;