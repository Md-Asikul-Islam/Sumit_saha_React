import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        text: 'JavaScript is awesome',
        library: 'React',
        isAwesome: true,
    };

    handleChange = (e) => {
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                text: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            console.log('nothing here');
        }
    };

    submitHandler = (e) => {
        const { title, text, library, isAwesome } = this.state;
        e.preventDefault();
        console.log(title, text, library, isAwesome);
    };

    render() {
        const { title, text, library, isAwesome } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={null} />
                    <input
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea name="text" value={text} onChange={this.handleChange} />
                    <br />
                    <br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

// ******
// ১। যদি jsx Element এ আমরা কোন  এট্রিবিউট হিসেবে value = " " পাস করি তখন রিয়েকট

//  নিজেই state পরিবর্তন করে অন্যথায় জাভাস্ক্রিপ্ট ডোম এই কাজ করবে । যেমন-

//  <input type="submit" value="Submit" />

//  এই ক্ষেত্রে রিয়েকট  state পরিবর্তন করবে ।


// ২। constructor অবজেক্ট এর কোন ডাটা রেনডার ফাংশনে এক্সেস করতে চাইলে (this.state.objectName) দিয়ে  এক্সেস নিতে হবে ।

// ৩। state এর কোন ডাটা পরিবর্তন করতে setState() ফাংশনের মধ্যে করতে হবে ।

// ৪।  class এর ভিতরে কোন মেথড কে এক্সেস করতে অন্য মেথডে এক্সেস করতে চাইলে this.methodName  দিয়ে এক্সেস করতে হবে ।   

// ৫। onChange() ফাংশন এখানে একটা  ইভেন্ট ফায়ার করছে বাঁ ক্লিক আর মাধ্যমে ভ্যালু পরিবর্তন হচ্ছে ।।  যে 

// কারনে handleChange(e) ফাংশন by default তার প্যারামিটারে e  নামে একটা  ইভেন্ট রিসিভ করবে । input 

// Element এর পুরা  ইভেন্ট  ডিটেইলস  handleChange(e) ফাংশনে থাকবে ।



// *******






