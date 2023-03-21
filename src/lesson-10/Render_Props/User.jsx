export default function User({ render }) {
    return render(false);
}



// *****

// ১। App() ফাংশন বাঁ   parent component থেকে একটা   name = "sumit" props পাঠাবো , সেই   name 

// = "sumit" props টা User({name}) ফাংশনের প্যারামিটারে এই নামেই রিসিভ করবে আবার সেই নামেই  রিটার্ন করবে ।

// ২। আমরা চাইলে parent component থেকে একটা   name = "sumit" props এ স্ট্রিং না দিয়ে সরাসরি 

// ফাংশন বাঁ অবজেক্ট দিতে পারি । যেমন -  name = {() => "sumit "} এখানে  এই জিনিসটা ফাংশন 

// রিটার্ন করে  "sumit " পরে চাইল্ড component এ props টা  name নামে যাবে সেটা আল্টিমেটলি 

// একটা ফাংশন আকারে যাবে । কিন্তু ফাংশনটা কল করতে হবে এভাবে - return name() ;

// ৩। আমরা চাইলে ফাংশন প্যারামিটার সহ পাঠাতে পারি যেমন- name = {(isLoggedIn) => 
    
//     isLoggedIn ? "sumit " : "Guest"}

// কল করার ক্ষেত্রে এভাবে করতে হবে -  return name(true) ;

// ৪। User()  component এ কোন render() ফাংশন নাই , render লজিক বাঁ jsx Element ও নাই । এখন

// আমরা name কে render দিয়ে পরিবর্তন করে দিব তাহলে এটাই হবে  render props

// render props এমন একটা ফাংশন যেটা বাইরে থেকে render লজিক নিয়ে নিজের মধ্যে render করে দেয় ।




