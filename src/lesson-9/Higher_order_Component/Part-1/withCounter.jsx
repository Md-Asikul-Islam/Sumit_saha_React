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

// ১। Hiher order component মুলত একটা component, যেটা রিটার্ন করে অন্য আরেকটা component এবং component কে 

// প্যারামিটার হিসাবে গ্রহন করে । যদি আমরা একটা component কে ,   অন্য আরেকটা functional  component 

// প্যারামিটার হিসাবে  পাস করি । তবে তাকে আমরা  Hiher order component বলব । যেমন - withCounter

// (HoverCounter);







// *****