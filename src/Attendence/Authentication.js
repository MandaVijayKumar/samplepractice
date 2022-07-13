import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EmployeeDetails from './EmployeeDetails';
import Login from './Login';
import Navbar from './Navbar';
import Register from './Register';


function Authentication() {
    return (
        <div>
        <BrowserRouter>
                <Navbar/>
                <Routes>
                            <Route exact path = "/" element={<Login/>}/>
                            <Route exact path = "/Register" element={<Register/>}/>
                            <Route exact path = "/Employees" element={<EmployeeDetails/>}/> 
                </Routes>  
                            
        </BrowserRouter>
        

            
        </div>
    )
}

export default Authentication
