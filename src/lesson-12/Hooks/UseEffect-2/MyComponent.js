import React, {useEffect, useState } from 'react'

function MyComponent() {
    const[count, setCount] = useState(0);
    const[date, setDate] = useState(new Date());

const tick = () => {
    setDate(new Date());
};

useEffect(() => {
document.title = `Clicked ${count} times `;
});

useEffect(() =>{
    console.log(` helllo bangladesh`)
    setInterval(tick, 1000)
},[])



const addClick = () => {
    setCount((prevCount) => prevCount + 1);
}

  return (
    <div>
        <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type="button" onClick={addClick}>
                        Click
                    </button>
                </p>
    </div>
  )
}

export default MyComponent


// *******
// ১। useEffect() একটা সিম্পল ফাংশন যার ভিতরে আর একটা ফাংশন পাবে যেটা প্রত্যেক render() এ useEffect() কে  রান করাবে  ।

// Class component এ  componentDidMount শুধু প্রথমবার render() এ   রান করায় দ্বিতীয় বার করতে   componentDidUpdate lifeCycle মেথড ব্যবহার করতে হয় । 

// কিন্তু ফানশনাল component এ কোন lifeCycle মেথড  এর দরকার নাই ।

// ২। useEffect() একটা সিম্পল ফাংশন যার ভিতরে প্রথম প্যারামিটারে  একটা ফাংশন পাবে এবং দ্বিতীয়  প্যারামিটারে একটা অ্যাঁরে পাবে ।  অ্যাঁরে ফাকা থাকলে একবারই useEffect() রেনডার হবে আবার অ্যাঁরেতেঁ  বলে দেওয়া যাবে কোন জিনিস পরিবর্তন হলে useEffect() কাজ করবে । এই অ্যাঁরে টা আসলে ডিপেনডেনসি অ্যাঁরে 

// ৩। Class component এ  componentWillUnMount ব্যবহার করা হতো মুলত কোন একটা component clear করার জন্য এই কাজটা আমরা ফাংশনাল component এ useEffect() ফাংশনের ভিতরে আমরা যে ফাংশনটা দিব সেটা যদি রিটার্ন  ফাংশন হয় তবে সেটা componentWillUnMount  মত কাজ করবে ।


// ********