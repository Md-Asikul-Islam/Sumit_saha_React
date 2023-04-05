import React, { useState } from 'react'

function TodosTwo() {
    const[todo, setTodo] = useState("");
    const[warning, setWarning] = useState(null);

   const handleInput = (e) => {
        const inputValue = e.target.value ;
        const updateWarning = inputValue.includes('.js') ? " You need javascript skill to complete the task . Do you have it " : null; 


        setTodo(inputValue)
        setWarning(updateWarning)
    }
  return (
    <div>
       <p>{todo}</p>
       <p>
         <textarea name='todo' value={todo} onChange={handleInput}></textarea>
       </p>
       <hr/>
        <h2> { warning || " Good Choice !"}</h2>
    </div>
  )
}

export default TodosTwo;

// *****

// ১। React Hooks কখনই কোন  component এর টপ লেভেলে  ছাড়া করা যাবে না । নিজের বানানো কাস্টম ফাংশন , কন্ডিশন এই গুলার মধ্যে React Hooks ব্যবহার করা যাবে না ।

// ২। Class Component এ setState অবজেক্ট যে যে প্রপার্টির ভ্যালু পরিবর্তন হতো সেটাই শুধু আপডেট করত বাঁ মারজ করত । কিন্ত funtional component এ state টা কোন  অবজেক্টের মধ্যে নাই আলাদা আলাদা ভ্যালু হিসেবে আছে , setTodo function যদি কোন সিঙ্গেল ভ্যালু না দিয়ে  অবজেক্ট আকারে দেয় সেক্ষেত্রে সমস্যা হয় । এই সমস্যা সমাধান করতে শুরুতেঁ  অবজেক্ট spreading করতে হবে । যেমন -

// ...todo 

// ৩। যদি কখনো আমাদের আগের state এর ভ্যালু use করতে হয় সেক্ষেত্রে 

// <button type="button" onclick={() => setCount((prevState) => prevState + 1 )}></button> এভাবে 

// করতে হবে । 


// *****