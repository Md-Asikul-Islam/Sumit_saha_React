// import React from 'react';
// import { convert, toCelsius, toFahrenheit } from './Converter ';
// import BoilingVerdict from './BoilingVerdict';
// import TemperatureInput from './TemperatureInput';

// export default class Calclator extends React.Component {
//     state = { temperature: '', scale: 'c' };

//     handleChange = (e, scale) => {
//         this.setState({
//             temperature: e.target.value,
//             scale,
//         });
//     };

//     render() {
//         const { temperature, scale } = this.state;
//         const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
//         const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

//         return (
//             <div>
//                 <TemperatureInput
//                     scale="c"
//                     temperature={celsius}
//                     onTemperatureChange={this.handleChange}
//                 />
//                 <TemperatureInput
//                     scale="f"
//                     temperature={fahrenheit}
//                     onTemperatureChange={this.handleChange}
//                 />
//                 <BoilingVerdict celsius={parseFloat(celsius)} />
//             </div>
//         );
//     }
// }




// ************

// ১।  <BoilingVerdict celsius={parseFloat(temperature)}  /> jsx element টি একটি props রিসিভ করে celsius
// নামে এবং সেটা state এর  temperature : " " পাবে । স্ট্রিং হিসেবে রাখার জন্য parseFloat করা হয়েছে ।

// ২। একটা সিঙ্গেল জায়গায় আমার state টা থাকতে হবে যেন যে যে  component ঐ  state প্রয়োজন এবং  state ডাটা পরিবর্তনের জন্য যে যে  component ইফেক্ট পড়ে , সেই সেই component এর জন্য আমাদের সিঙ্গেল সোর্স থাকতে হবে । অর্থাৎ একটা জায়গা থেকে state হ্যান্ডল করতে হবে ।

// ৩। রিয়েকট এ সব সময় টপ ডাউন ডাটা flow মেইন টেইন করতে হবে । 

// ৪। lifting state অর্থাৎ কোন নির্দিষ্ট   state কে ডাটা flow মেইন টেইন করতে উপরে তুলে দিতে হবে । এইজন্য বাগ ঠিক করতে সহজ হবে । শুদুমাত্র প্যারেন্ট  component  এ state থাকবে বাকি component গুলা props আকারে ডাটা পাস করবে । 


// ৫। দুইটা লজিক বিলড আপের জন্য আলাদা আলাদা state লিখি কিন্তু  যখন একটা state থেকে অন্য state লজিকালি মাথ মাতিক্স ওয়ে তেঁ  derrive করা যায় সেক্ষত্রে আলাদা আলাদা state লিখার দরকার নাই । 


// ৬। বাগ খুজতে গেলে শুধু উপরে গেলে হবে যেহেতু টপ ডাউন ডাটা flow  তেঁ থাকে ।




// ************


 //*****

// -----Coding club bangladesh -- youtube chanel 


// ********

// import React, { Component } from 'react'

// export default class Calculator extends Component {
//  constructor(props) {
//    super(props)
 
//    this.state = {
//       duration : 0,
//       unit : ""
//    }
//  }



//  handleChange = (e, unit ) => {
//     const {value} = e.target;
//     const val = parseFloat (value);
//     this.setState({
//         duration : Number.isNaN(val) ? "" : val,
//         unit : unit
//     });
//  }

//   render() {
//     const{duration, unit} = this.state
//    let minites  ;
//    let second   ;
//     if(unit === ""  && duration === " "){
//       minites = 0;
//       second  = 0;
//     }
//     else if (unit === "minites" && duration ){
//      minites = duration;
//      second =  duration * 60 ;
//     }
//     else if ( unit === "second" && duration){
//       second = duration;
//       minites  = duration / 60 
//     }
//     else{
//       minites = 0;
//       second = 0 ;
//     }

    
//     return (
//       <div>
//         <label htmlFor='minites'> Minites :
//           <input type="number" value={duration} onChange = {(e) => this.handleChange(e, "minite")}  />
//          </label>
//          <br/>
//          <br/>
//          <label htmlFor='minites'> Second :
//           <input type="number" value={duration}   onChange = {(e) => this.handleChange(e, "Second")}  />
//          </label>

//          <p>{minites} Minites: is Equal to {second} second </p>
//       </div>
//     )
//   }
// }



// ******* 

//---- Anisul islam youtube chanel ----


// ********



// ১। props মূলত প্যারেন্ট component থেকে আমরা যখন চাইল্ড component এ ডাটা পাঠাবো , তখন অবশ্যই  props ব্যবহার করব । কোন একটা ফাংশনাল কম্পোনেন্ট বাঁ চাইল্ড component এর প্যারামিটারে  props কে পাস করতে হবে । 

// আমাদের এখন চাইল্ড component থেকে প্যারেন্ট component এ ডাটা পাঠাবো এটা উল্টো তাই state lifting করতে 

// হবে ।


import React from 'react'
import todos from "./todos"

function Calculator() {
    const todos = ["todo1" , "todo2"]
  return (
    <div>
       <Todos todos />
    </div>
  )
}

export default Calculator



// another file Todos

import React from 'react'
const Todos = (props) => {
    return(
        <div>
           {props.todos.map((todo) => (
            <p key={index}>{todo}</p>
           ))}
        </div>
    )
}
export default Todos ;


