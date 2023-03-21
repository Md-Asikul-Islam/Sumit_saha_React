import './App.css';
import Click from './lesson-10/Render_Props/Click';
import Hover from './lesson-10/Render_Props/Hover';
import Counter from './lesson-10/Render_Props/Render/Counter';


function App() {
  return (
    <div className="App">
       {/* <Click/>
       <Hover/> */}

       <Counter 
       render = {(counter, incrementCount) => (
       <Click count ={counter} incrementCount ={incrementCount} /> )}
       </div>
       
  

export default App;

