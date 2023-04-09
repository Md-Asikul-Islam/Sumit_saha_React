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
  return (
    <div>
        <div> Count - {count} </div>
        <button type='button' onClick={() => dispatch('increment') } > increment</button>
        <button type='button'onClick={() => dispatch('decrement') }  > decrement</button>
    </div>
  )
}
 
export default Counter ;

// ******
// ১।  const [count, dispatch] = useReducer(reducer,initialState )   এখানে useReducer(reducer,initialState ) Hooks দুইটা প্যারামিটার নেয় । প্রথম প্যারামিটারে reducer(state, action) নামক একটা ফাংশন থাকবে ,সেই ফাংশনটা component এর উপরে থাকবে এবং তার ও দুইটা প্যারামিটার থাকবে প্রথম প্যারামিটারে  state দ্বিতীয় ও  প্যারামিটারে action যেটা  event handlar মত কাজ করবে ।  ফাংশন বডিতে বলে দিতে হবে কি কাজ করবে । 
// দ্বিতীয় ও প্যারামিটারে initialState থাকবে সেই  component এর উপরে থাকবে এবং এর ভ্যালু দিয়ে দিতে হবে । 

// ২। [count, dispatch] টুপল প্রথম প্যারামিটারে count এর ভ্যালু নিবে , দ্বিতীয়ও প্যারামিটারে dispatch ফাংশন নিবে এই ফাংশনটা কোন  event handlar এ রিটার্ন ফাংশন হিসেবে থাকবে ।  



// ******


