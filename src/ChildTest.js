import React from 'react'

function ChildTest({name}) {
     console.log('i am memo child')
    return (
        <div>
            <h1>this. is {name}</h1>
        </div>
    )
}

export default React.memo(ChildTest);
