import React, { useState } from 'react'
import Title from './lesson-12/Hooks/UseCallbackAndUseMemo/Part-1/Title';
import ShowCount from './lesson-12/Hooks/UseCallbackAndUseMemo/Part-1/ShowCount'
import Button from './lesson-12/Hooks/UseCallbackAndUseMemo/Part-1/Button';



function App() {
  const[count1, setCount1] = useState(0);
  const[count2, setCount2] = useState(0);

  const incrementByOne = () => {

    setCount1((prevCount) => prevCount + 1)
  };

  const incrementByFive = () => {
    setCount2((prevCount) => prevCount + 5 )
  }


  return (
    <div className='app'>
      <Title/>
      <ShowCount count={count1} title = "Counter 1"  />
      <Button handleClick ={incrementByOne}> increment by one  </Button>
      <hr/>

      <ShowCount count={count2} title = "Counter 2"  />
      <Button handleClick ={incrementByFive}> increment by five </Button>
    </div>
  )
}

export default App