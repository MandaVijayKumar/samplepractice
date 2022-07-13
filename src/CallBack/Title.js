import React from 'react'

function Title() {
    console.log('render title')
  return (
    <div>callback</div>
  )
}

export default React.memo(Title);