import React from 'react'

function Input({type,placeholder}, ref) {
  return (
    <div>
         <input type = {type} placeholder = {placeholder} />
    </div>
  )
}

const forwardedInput = React.forwardRef(Input)

export default forwardedInput