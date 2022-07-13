import React from 'react';

class Teachers extends React.Component {
    
       constructor(props) {
           super(props);
           this.state = {
               message:'good morning'
           }
           
       }
       whishes = (msg)=>{
           this.setState({
               message:msg
           })
       }
      
       render(){
         
        let {id,name,salary}=this.props.profile;
           return(<div>
              <h3>{this.state.message} {name} sir</h3>
              <button onClick={this.whishes.bind(this,'good evening')}>good evening</button>
            </div>)
       }
      





}
export default Teachers;