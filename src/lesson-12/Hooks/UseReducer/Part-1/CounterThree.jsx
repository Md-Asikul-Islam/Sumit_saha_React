import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'increment':
           return state + 1 ;
        case 'decrement' :
           return state - 1 
        default : 
           return state;
    }
}

function Counter() {
   const [count, dispatch] = useReducer(reducer,initialState )
   const [count2, dispatch2] = useReducer(reducer, initialState)
  return (
  <div>
      <div>
        <div> Count - {count} </div>
        <button type='button' onClick={() => dispatch('increment') } > increment</button>
        <button type='button'onClick={() => dispatch('decrement') }  > decrement</button>
    </div>
    <div>
        <div> Count - {count2} </div>
        <button type='button' onClick={() => dispatch2('increment') } > increment</button>
        <button type='button'onClick={() => dispatch2('decrement') }  > decrement</button>
    </div>
  </div>
  )
}
 
export default Counter ;
