import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Signout from './Signout'


import Navebar from "./Navebar";
import Register from "./Register";
import Login from "./Login";

function Index() {
  return (
    <div>
        <Router>
            <Navebar/>
            <Routes>
                <Route path="/" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signout" element={<Signout/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default Index