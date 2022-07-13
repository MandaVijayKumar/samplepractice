import React,{useState} from 'react';

let Login = ()=>{

    let [data,setData] = useState({uname:'',password:''});

    let changeUname = (event)=>{

        setData({...data,uname:event.target.value});
    }
    let changePwd = (event)=>{

        setData({...data,password:event.target.value});
    }
    let submitHandler = (e)=>{
        e.preventDefault();
    }
    let changeHandler = (e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
            

        })

    }


    return(
        <div>
        <h1>Login Page</h1>
        <form onSubmit={submitHandler}>
        <label>UserName</label>
        <input type='text' onChange={changeHandler} name="uname" value={data.uname} placeholder="Enter your name"/>
        <br/>
        <label>Password</label>
        <input type='password' onChange={changeHandler} name="password" value={data.password} placeholder="Enter your password"/>
        <br/>
        <input type="submit" value="LOGIN"/>
        </form>
        <h2>username is :{data.uname}</h2>
        <h2>password is :{data.password}</h2>
        </div>
    );
}
export default Login;