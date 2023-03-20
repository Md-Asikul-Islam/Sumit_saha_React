export default function Text({ addEmoji, addBracket }) {
  let text = 'I am JavaScript Programming Language.';
  if (addEmoji) {
      text = addEmoji(text, '💜');
  }
  if (addBracket) {
      text = addBracket(text);
  }
  return <div>{text}</div>;
}

// *******
// ১। composition এর মেইন concept হল আমার যা যা লাগবে তা props আকারে নিয়ে আসা ।

// পুরো প্যারেন্ট কে আনার থেকে আমার যা যা লাগবে তা props আকারে নিয়ে আসব । 

// ২। আমরা যদি প্যারেন্ট component দিয়ে চাইল্ড component কে wrap করে দেই , তাহলে 

// প্যারেন্ট component থেকে  চাইল্ড component  ডাটা পাঠাতে পারব । 



// ******