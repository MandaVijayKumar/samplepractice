import React,{useState} from "react";
let Registration = ()=>{
    let [uname,setuname]=useState('');
    let [email,setEmail]=useState('');
    let [pwd,setPwd]=useState('');
    let [cpwd,setCpwd]=useState('');
    let changeUname = (event)=>{
        setuname(event.target.value);
    }
    let changeEmail = (event)=>{
        setEmail(event.target.value);
    }
    let changePwd = (event)=>{
        setPwd(event.target.value);
    }
    let changeCpwd = (event)=>{
        setCpwd(event.target.value);
    }
    let submitCon =(event)=>{
        event.preventDefault();
    }


    return(<div>
        <h1>REGISTRATION FORM</h1>
        <form onSubmit={submitCon}>
            <label>UserName :</label>
             <input type ="text" onChange={changeUname} name="username" placeholder="enter your name" value={uname}/>
             <br/>
             <label>Email Id :</label>
             <input type ="text" onChange={changeEmail} name="email" placeholder="enter your email" value={email}/>
             <br/>
             <label>password :</label>
             <input type ="password" onChange={changePwd} name="password" placeholder="enter your password" value={pwd}/>
             <br/>
             <label>Conform Password :</label>
             <input type ="password" onChange={changeCpwd} name="conformpassword" placeholder="enter your password" value={cpwd}/>
             <br/>
             <input type="submit" value="SUBMIT"/>


        </form>
        <h2>my Username is : {uname}</h2>
        <h2>my Email id is : {email}</h2>
        <h2>Password is : {pwd}</h2>
        <h2>conform Pssword is : {cpwd}</h2>
        
                
        </div>

    );
}
export default Registration;