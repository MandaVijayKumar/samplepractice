import React from 'react';
import Department from './Department.js';

let Courses = function() {



    return(

        <div>
             <h2>Courses names are</h2>
             <ul>
               <li>MCA</li>
               <li>Physics</li>
               <li>Chemistry</li>
               <li>Statistics</li>
             </ul>
             <Department/>
        </div>
    );
}

export default Courses;