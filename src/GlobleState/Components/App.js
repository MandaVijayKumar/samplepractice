import React from 'react'
import {  Route, Routes} from 'react-router-dom';
import Counter from './Counter';
import Home from './Home';
import Employees  from './Employees';
import UserList from './UserList';
import Navbar from './Navbar';

function App() {
  return (
    <div>
                   <Navbar/>
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/counter' element={<Counter/>}/>
               <Route path='/employees' element={<Employees/>}/>
               <Route path='/users' element={<UserList/>}/>
           </Routes>
    </div>
  )
}

export default App