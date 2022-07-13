import React from 'react'

function TodoItems({listItems}) {
  return (
    <div >
        <ul className='list-group text-center bg-info w-75 '>
            {
                listItems.map((item,index)=>{
                    return(
                        <li className='list-group-item' key={index}>{item}</li>
                    )
                })
            }

        </ul>
    </div>
  )
}

export default TodoItems