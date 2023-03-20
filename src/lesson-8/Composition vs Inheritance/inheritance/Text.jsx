import Emoji from './Emoji';

export default class Text extends Emoji {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        const decoratedText = this.addEmoji('I am JavaScript Language', '💜');
        return super.render(decoratedText);
    }
}

// ****
// ১। Emoji class component, হচ্ছে প্যারেন্ট component

// ২। Text  class component, হচ্ছে চাইল্ড   component

// ৩। Text  class component এখন Emoji class component কে  extends 

// করবে । extends করা মানে উত্তরাধিকার সুত্রে পাওয়া ।

// ৪। Emoji class component যদি ডিলিট করে দেই তাহলে Text component 

// কাজ করবে না । এটা টাইটলি কাপলড হয়ে আছে । এই সকল কারনে Reactআমরা কখনই  extends  করব না । 