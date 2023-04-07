import React, { useEffect,useRef } from 'react'
import Input from './Input';

function Form() {

  const inputRef = useRef(null);

  useEffect(() => {
  inputRef.current.focus()
  }, [])
  return (
    <div>
        <p>
            <Input ref ={inputRef} type='text' placeholder='enter something ' />
        </p>
    </div>
  )
}

export default Form


// ******
// ১। রিয়েক্ট এ যদি কখনো ডোম ম্যানুপুলেশন এর কাজ করতে হয় সেক্ষেত্রে যেন জাভাস্ক্রিপ্ট  ওয়ে তেঁ না করা হয়। কেননা সে কাজ টা রিয়েক্ট নিজে করবে । এখন রিয়েক্ট ওয়ে তেঁ করতে হলে useRef() Hooks ব্যবহার করতে হবে ।  useRef hook টি ব্যবহার করা হয় মূলত DOM Node ধরতে এবং DOM Related Operation গুলো React এর way তে handle করতে। 



// *******