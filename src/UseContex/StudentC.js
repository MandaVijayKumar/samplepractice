import React from 'react'
import { UserConsumer } from './useContext'

function StudentC() {
    return (
        <div>
        <h1>this Component c</h1>
        <UserConsumer>
            {
                (student)=> {
                    return (<><ul><li>{student.id}</li><li>{student.name}</li><li>{student.marks}</li></ul></>)
                }
            }
        </UserConsumer>
            
        </div>
    )
}

export default StudentC
