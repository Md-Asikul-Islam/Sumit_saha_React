import './App.css';
import Text from './lesson-8/Composition vs Inheritance/Composition/Text';
import Emoji from './lesson-8/Composition vs Inheritance/Composition/Emoji';
function App() {
  return (
    <div className="App">
      <Emoji>{}
         (addEmoji) => <Text addEmoji = {addEmoji}/>
      </Emoji>

    </div>
  );
}

export default App;

