import React from 'react';
import ClickCounter from './lesson-11/Context_Api/Components/ClickCounter'
import Section from './lesson-11/Context_Api/Components/Section';
import Counter from './lesson-11/Context_Api/Components/Counter';
import ThemeContext from './lesson-11/Context_Api/Context/ThemeContext';

export default class  App extends React.Component {
  state ={
    theme : 'dark'
  }

  reder(){
    const{theme} = this.state;
    return (
      <div>
        <Counter>
           {(counter, incrementCount) => (
            <ClickCounter count = {counter} incrementCount ={incrementCount} />
           )}
        </Counter>
         <ThemeContext.Provider value={{theme: theme}} ><Section theme ={theme} /></ThemeContext.Provider>
      </div>
    )
  }
 
}


