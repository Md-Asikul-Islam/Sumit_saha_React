import React from 'react';

const withCounter = (OriginalComponent) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return <OriginalComponent count={count} incrementCount={this.incrementCount} />;
        }
    }
    return NewComponent;
};

export default withCounter;


// ****

// --একই কোড যেন বার বার না লিখতে হয় 

// -- একই কোড যেন ভিন্ন ভিন্ন component এ  লিখতে না হয় এই জন্যই মূলত Hiher order component ববহার করা ।

// ১। Hiher order component মুলত এমন একটা ফাংশন যেটা একটা  component কে আর্গুমেন্ট হিসাবে গ্রহন করবে 

// OriginalComponent নামে  ।  এখন ফাংশন বডির ভিতরে NewComponent নামে একটা নতুন  component  তৈরি করব ,   

// যেটা  রেনডার ফাংশনে রিটার্ন করবে আর্গুমেন্টকে jsx Element হিসেবে  ।  আবার NewComponent নামে বানানো  

// component টা রিটার্ন করব Newcomponent



//  । 


//  যেমন - 


// import React from 'react';

// const withCounter = (OriginalComponent) => {
//     class NewComponent extends React.Component {
//         render(){
//             return <OriginalComponent/>
//         }
//     }

//     return NewComponent

// }

// export default withCounter;


// ২। count এবং incrementCount এর ভ্যালু আমরা props আকারে পাস করব <OriginalComponent  count={} 

// incrementCount ={} /> 


// ৩। এরপর আমরা যে ফাইল বাঁ Component এ HOC ব্যবহার করব সেই ফাইলে  import করতেঁ হবে HOC । তারপর export default withCounter(ফাইল বাঁ Component)  

// ৪। এখন ফাইল বাঁ Component গুলোতেঁ এক্সেস করতেঁ  <button type="button" onClick={incrementCount}>
// Clicked {count} times
// </button>




// *****


