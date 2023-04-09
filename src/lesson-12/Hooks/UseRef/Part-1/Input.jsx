import React from 'react'

function Input({type,placeholder}, ref) {
  return (
    <div>
         <input type = {type} placeholder = {placeholder} />
    </div>
  )
}

const forwardedInput = React.forwardRef(Input)

export default forwardedInput;

//  ####  forwardRef কিভাবে কাজ করে , কোথায় ব্যবহার  হয় ?? 

// আমার কখনো যদি reference টা প্যারেন্ট component থেকে চাইল্ড component এ পাঠাতে হয় । তখন forwardRef()   ব্যবহার করব । 

// ১।   useRef()   মূলত একটা রেফারেন্স টাইপ বাঁ রেফারেন্স পাঠায় । এর জন্য একটা ভারিএবল এর মধ্যে স্টোর করবে পরে রেফারেন্স দিবে । এই  reference  টা props আকারে আমরা যেভাবে পাঠাই , সেভাবে দিলে হবে না । সেটা নিতে হবে React.forwadRef(component)    দিয়ে , এটা একটা ভারিএবল এর মধ্যে স্টোর করবে তারপর সেই ভারিএবল export default করে দিবে এবং ফাংশনের সেকেন্ড প্যারামিটারে reference দিয়ে দিবে । 
