import React from 'react';

class FormPractice extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            login:{email:'',password:''},
            register:{username:'',email:'',password:''}
        }
    }

    render(){

        return(
             <div>
                 <form onSubmit={(e)=>{e.preventDefault();console.log(JSON.stringify(this.state.register))}}>
                 <div className='form-group'>
                     <input type="text"
                            className='form-control'
                            name='username'
                            value={this.state.register.username}
                            onChange={(e)=>this.setState({...this.state,register:{...this.state.register,[e.target.name]:e.target.value}})}
                            placeholder='username'
                     />
                 </div>
                 <div className='form-group'>
                 <input type="email"
                        className='form-control'
                        name='email'
                        value={this.state.register.email}
                        onChange={(e)=>this.setState({...this.state,register:{...this.state.register,[e.target.name]:e.target.value}})}
                        placeholder='email'
                 />
             </div>
             <div className='form-group'>
             <input type="password"
                    className='form-control'
                    name='password'
                    value={this.state.register.password}
                    onChange={(e)=>this.setState({...this.state,register:{...this.state.register,[e.target.name]:e.target.value}})}
                    placeholder='password'
             />
         </div>
                  <div>
                       <input type="submit" value="register"/>
                  </div>
             
             
             
                 </form>
            
            
            </div>)
    }
}
export default FormPractice;