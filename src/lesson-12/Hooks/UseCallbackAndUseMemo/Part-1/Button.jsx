import React from "react";
function Button({handleClick, children}){
    console.log(`redering button ${children}`);
    return(
        <div>
            <button type="button" onClick={handleClick} >
                {children}
             </button>
        </div>
    )
}

export default React.memo(Button ) ;


// ******
//    রিয়েক্ট এ কোন state  বাঁ  props  চেইঞ্জ হলে App component এ থাকা সকল চাইল্ড  component কে রি 
   
//    রেনডার করবে এটা রিয়েক্ট এর নরমাল বিহেবিয়ার । যদি আমার এই রকম প্রয়োজন হয় আমি যে component এর  
   
//    state  বাঁ  props  চেইঞ্জ করব শুধু সেই component রি রেনডার করবে , তাহলে React.memo ব্যবহার করব । 
   
//    এটা কোন Hooks নয় , এটা HOC এর মত  Higher Order Function হিসেবে কাজ করে । 

//  ১। যে যে component কে আমার রেনডারিং থেকে আটকাতে হবে তাকে HOC এর মত React.memo মধ্যে পাস করে দিব ।
//   
// __________________________________________________________________________________________________


//    Primitive Data types  জাভাস্ক্রিপ্ট এ  Number, String, Boolean, Undefined, Null and Symbol.

    //  আমরা জানি ফাংশন এবং  অবজেক্ট রেফারেন্স ডেটা টাইপ,  এখানে ফাংশন এর রেফারেন্স পাঠায় ।  ফাংশন দেখতে একরকম হলেও রেফারেন্স ভিন্ন । এইরকম প্রবলেম সলভ করতে useCallback() Hook ব্যবহার করা হয়। 
     
//  ২। useCallback() Hook হচ্ছে একটা  Callback function কে মনে রাখবে এবং শুধুমাত্র তখনই ভুলে যাবে যখন এই function টা যে যে জিনিস গুলোর উপর নির্ভর করে সেগুলা পরিবর্তন করবে । 
  

// ৩।   useMemo() Hook হচ্ছে একটা   function এর রিটার্ন ভ্যালু  কে মনে রাখবে এবং শুধুমাত্র তখনই ভুলে 

// যাবে যখন এই function টা যে যে জিনিস গুলোর উপর নির্ভর করে সেগুলা পরিবর্তন করবে 
// ******