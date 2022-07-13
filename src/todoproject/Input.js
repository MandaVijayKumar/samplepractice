import React, { useState } from 'react'
import TodoItems from './TodoItems';
const Input = () => {
    let [ taskName, setTaskName ] = useState('');
    let [ listItems, setListItems ] = useState([]);
    const addItems = () => {
      if(taskName !=='') setListItems([...listItems,taskName]);
      console.log(listItems);
    }
  return (
    <div className='w-100'>
        <div className='form-inline'>
            <div className='input-group w-75 '>
                <input 
                    type= 'text'
                    value={taskName}
                    name='newTask'
                    onChange={(e) => setTaskName(e.target.value) }
                    placeholder ='New Task'
                    className='form-control'
                />
                
            </div>          
          
            <button className='btn btn-success' onClick={addItems}>Add</button>
           
       </div>
       {
          listItems.length !== 0 && <TodoItems listItems={listItems}/>
        }
    </div>
  )
}

export default React.memo(Input);