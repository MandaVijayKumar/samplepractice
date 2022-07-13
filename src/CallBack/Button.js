import React from 'react'

function Button({handlerclick,children}) {
    console.log('render button',children)
  return (
    <button onClick={handlerclick}>{children}</button>
  )
}

export default React.memo(Button);