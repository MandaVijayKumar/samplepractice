

import React from 'react';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';


import Home from './Psycology/Home.js';

import Navbar from './Psycology/Navbar.js';

import About from './Psycology/About.js';
import Ack from './Psycology/Ack.js'

import { Provider } from 'react-redux';
import {store} from './Psycology/Redux/Store.js'
import Main from './Psycology/Questions/Main.js';
import Question2 from './Psycology/Questions/Question2.js';
import Question1 from './Psycology/Questions/Question1.js';
import Question3 from './Psycology/Questions/Question3.js';
import Question4 from './Psycology/Questions/Question4.js';
import Question5 from './Psycology/Questions/Question5.js';
import Question6 from './Psycology/Questions/Question6.js';
import Question7 from './Psycology/Questions/Question7.js';
import Question8 from './Psycology/Questions/Question8.js';
import Question10 from './Psycology/Questions/Question10.js';
import Question11 from './Psycology/Questions/Question11.js';
import Question12 from './Psycology/Questions/Question12.js';
import Question13 from './Psycology/Questions/Question13.js';
import Question9 from './Psycology/Questions/Question9.js';
import Question14 from './Psycology/Questions/Question14.js';
import Question15 from './Psycology/Questions/Question15.js';
import Question16 from './Psycology/Questions/Question16.js';
import Question17 from './Psycology/Questions/Question17.js';
import Question18 from './Psycology/Questions/Question18.js';
import Question19 from './Psycology/Questions/Question19.js';
import Question20 from './Psycology/Questions/Question20.js';
import Solution from './Psycology/Questions/Solution.js';
import Welcome from './Psycology/Questions/Welcome.js';


let App = () => {
  
   return (
     <div>
     <BrowserRouter>
           <Navbar/>
           <Provider store={store}>
           <Routes>
                <Route exact path="/" element={<Welcome/>}/>
                <Route exact path="/Home" element={<Home/>}/>
                <Route exact path="/About" element={<About/>}/>
                <Route exact path="/Acknowledge" element ={<Ack/>}/>
                <Route exact path="/Main" element={<Main/>}/>
                <Route exact path="/Question1" element={<Question1/>}/>
                <Route exact path="/Question2" element={<Question2/>}/>
                <Route exact path="/Question3" element={<Question3/>}/>
                <Route exact path="/Question4" element={<Question4/>}/>
                <Route exact path="/Question5" element={<Question5/>}/>
                <Route exact path="/Question6" element={<Question6/>}/>
                <Route exact path="/Question7" element={<Question7/>}/>
                <Route exact path="/Question8" element={<Question8/>}/>
                <Route exact path="/Question9" element={<Question9/>}/>
                <Route exact path="/Question10" element={<Question10/>}/>
                <Route exact path="/Question11" element={<Question11/>}/>
                <Route exact path="/Question12" element={<Question12/>}/>
                <Route exact path="/Question13" element={<Question13/>}/>
                <Route exact path="/Question14" element={<Question14/>}/>
                <Route exact path="/Question15" element={<Question15/>}/>
                <Route exact path="/Question16" element={<Question16/>}/>
                <Route exact path="/Question17" element={<Question17/>}/>
                <Route exact path="/Question18" element={<Question18/>}/>
                <Route exact path="/Question19" element={<Question19/>}/>
                <Route exact path="/Question20" element={<Question20/>}/>
                <Route exact path="/Solution" element={<Solution/>}/>
                <Route  path="*" element={<Solution/>}/>
           </Routes>
           </Provider>
     </BrowserRouter>
   
     </div>

  );
}

export default React.memo(App);
