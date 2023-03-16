import React from 'react';
import { convert, toCelsius, toFahrenheit } from './Converter ';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calclator extends React.Component {
    state = { temperature: '', scale: 'c' };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleChange}
                />
                <BoilingVerdict celsius={parseFloat(celsius)} />
            </div>
        );
    }
}




// ************

// ১।  <BoilingVerdict celsius={parseFloat(temperature)}  /> jsx element টি একটি props রিসিভ করে celsius
// নামে এবং সেটা state এর  temperature : " " পাবে । স্ট্রিং হিসেবে রাখার জন্য parseFloat করা হয়েছে ।

// ২। একটা সিঙ্গেল জায়গায় আমার state টা থাকতে হবে যেন যে যে  component ঐ  state প্রয়োজন এবং  state ডাটা পরিবর্তনের জন্য যে যে  component ইফেক্ট পড়ে , সেই সেই component এর জন্য আমাদের সিঙ্গেল সোর্স থাকতে হবে । অর্থাৎ একটা জায়গা থেকে state হ্যান্ডল করতে হবে ।

// ৩। রিয়েকট এ সব সময় টপ ডাউন ডাটা flow মেইন টেইন করতে হবে । 

// ৪। lifting state অর্থাৎ কোন নির্দিষ্ট   state কে ডাটা flow মেইন টেইন করতে উপরে তুলে দিতে হবে । এইজন্য বাগ ঠিক করতে সহজ হবে । শুদুমাত্র প্যারেন্ট  component  এ state থাকবে বাকি component গুলা props আকারে ডাটা পাস করবে । 


// ৫। দুইটা লজিক বিলড আপের জন্য আলাদা আলাদা state লিখি কিন্তু  যখন একটা state থেকে অন্য state লজিকালি মাথ মাতিক্স ওয়ে তেঁ  derrive করা যায় সেক্ষত্রে আলাদা আলাদা state লিখার দরকার নাই । 


// ৬। বাগ খুজতে গেলে শুধু উপরে গেলে হবে যেহেতু টপ ডাউন ডাটা flow  তেঁ থাকে ।




// ************