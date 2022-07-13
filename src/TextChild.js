import React,{ Component } from 'react';

class TextChild extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name:null
             
        }
    }
   
    render(){
       
       
        return(React.createElement('div',{id:'first'},
        
                        React.createElement('div',{id:'sencond'},
                                React.createElement('h1',null,'vijay kumar'),
                                React.createElement('h2',null,'kumar naidu konnali village')
                        
                        ),
                        React.createElement('div',{id:'third'},
                                React.createElement('h1',null,'vijay kumar'),
                                React.createElement('h2',null,'kumar naidu konnali village')
                        
                        )
        
        
        
        ))
    }
    

}
export default TextChild;
