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
// ১। রিয়েক্ট এ যদি কখনো ডোম ম্যানুপুলেশন এর কাজ করতে হয় সেক্ষেত্রে যেন জাভাস্ক্রিপ্ট  ওয়ে তেঁ না করা হয়। কেননা সে কাজ টা রিয়েক্ট নিজে করবে । এখন রিয়েক্ট এর ওয়ে তেঁ করতে হলে useRef() Hooks ব্যবহার করতে হবে ।  useRef hook টি ব্যবহার করা হয় মূলত DOM Node ধরতে এবং DOM Related Operation গুলো React এর way তে handle করতে। 

// ২। কোন component কে প্রথমবার লোড করতে  useEffect()  ব্যবহার করা হয়য় । এটা একটা সিম্পল ফাংশন যার ভিতরে প্রথম প্যারামিটারে  একটা ফাংশন পাবে এবং দ্বিতীয়  প্যারামিটারে একটা অ্যাঁরে পাবে ।  অ্যাঁরে ফাকা থাকলে একবারই useEffect() রেনডার হবে আবার অ্যাঁরেতেঁ  বলে দেওয়া যাবে কোন জিনিস পরিবর্তন হলে useEffect() কাজ করবে । এই অ্যাঁরে টা আসলে ডিপেনডেনসি অ্যাঁরে । 




// *******