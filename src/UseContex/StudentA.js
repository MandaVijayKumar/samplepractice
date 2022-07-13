import React from 'react'
import StudentB from './StudentB';
import { UserProvider } from './useContext';

function StudentA() {
    let student = {id:1, name:'vijay', marks:70};
    return (
        <div>
                <h1>this is Component A</h1>
                <UserProvider value= {student}>
                     <StudentB/>
                </UserProvider>
                
            
        </div>
    )
}

export default StudentA
