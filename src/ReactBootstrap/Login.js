import { Form } from "react-bootstrap"
import React, {useState} from 'react'

 let Login = () => {
    const [ login, setLogin ] = useState({email:'',password:'',ispassed: false})
  return (
    <div>
        <Form>
            <Form.Group controlId='emailid'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name="email" value={login.email} required placeholder='enter email id' onChange={(event)=>setLogin({...login,[event.target.name]:event.target.value})}/>
                <Form.Text>enter valid email id</Form.Text>
            </Form.Group>
            <Form.Group controlId ='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' value={login.password} required placeholder='enter password' onChange={(event) => setLogin({...login, [event.target.name]:event.target.value})}/>
            </Form.Group>
            <Form.Group controlId='checkbox' className='mx-3'>
                <Form.Check type='checkbox' name='conform' value={login.ispassed} onChange={() =>setLogin({...login, ispassed: !login.ispassed})}/>
                <Form.Label>conform</Form.Label>
            </Form.Group>

        </Form>
        <pre>{JSON.stringify(login)}</pre>

    </div>
  )
}
export default Login;
