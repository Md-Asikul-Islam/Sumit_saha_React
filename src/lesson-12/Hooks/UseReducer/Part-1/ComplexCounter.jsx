import React, { useReducer } from 'react'

const initialState = {
    Counter : 0, 
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
           return { counter : state.Counter + 1 };
        case 'decrement' :
           return { counter : state.Counter - 1 };
        default : 
           return state;
    }
};

function ComplexCounter() {
   const [count, dispatch] = useReducer(reducer,initialState )
  return (
    <div>
        <div> Count - {count.Counter} </div>
        <button type='button' onClick={() => dispatch({
            type : 'increment',
        }) } > increment</button>

        <button type='button'onClick={() => dispatch({
            type : 'decrement',
        }) }  > decrement</button>
    </div>
  )
}
 
export default ComplexCounter ;

