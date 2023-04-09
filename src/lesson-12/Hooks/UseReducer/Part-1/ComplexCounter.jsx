import React, { useReducer } from 'react'

const initialState = {
    Counter : 0, 
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
           return{ counter : state.Counter + 1 };
        case 'decrement' :
           return { counter : state.Counter - 1 };
        default : 
           return state;
    }
};

function Counter() {
   const [count, dispatch] = useReducer(reducer,initialState )
  return (
    <div>
        <div> Count - {count.Counter} </div>
        <button type='button' onClick={() => dispatch({
            type : 'increment'
        }) } > increment</button>

        <button type='button'onClick={() => dispatch({
            type : 'decrement'
        }) }  > decrement</button>
    </div>
  )
}
 
export default Counter ;

// *****


// ## useReducer() Hook ব্যবহার করা হয় state management করতে 

// ## useState() Hook বানানো হয়েছে  useReducer() এর উপর base করে । 

// ## useReducer() Hook টা useState() Hook এর একটা বিকল্প । 

// ## React - এ state change  করার একটা  mechanism । 

// ## reduce vs useReducer


//         reduce                                              useReducer
                                                        

// 1. arrray. reduce(reducer, intialValue)                 1. useReducer(reducer, intialState)

// 2. singleReturnValue = reduer(accumulator, itemValue)   2. newState = reducer(currentState , action)

// 3.   return a single value                              3. return a tuple - [newState , dispatch]



// ******