import React from 'react'

function Count({text,value}) {
    console.log('render count',text)
  return (
    <div>{text} - {value}</div>
  )
}

export default React.memo(Count);