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
//  ১। যে যে component কে আমার রেনডারিং থেকে আটকাতে হবে তাকে HOC এর মত React.memo মধ্যে পাস করে দিব ।
//   
//  ২। useCallback() Hook হচ্ছে একটা  Callback function কে মনে রাখবে এবং শুধুমাত্র তখনই ভুলে যাবে যখন এই function টা যে যে জিনিস গুলোর উপর নির্ভর করে সেগুলা পরিবর্তন করবে । 
  

// ৩।   useMemo() Hook হচ্ছে একটা   function এর রিটার্ন ভ্যালু  কে মনে রাখবে এবং শুধুমাত্র তখনই ভুলে 

// যাবে যখন এই function টা যে যে জিনিস গুলোর উপর নির্ভর করে সেগুলা পরিবর্তন করবে 
// ******