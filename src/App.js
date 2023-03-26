import React from 'react';
import ClickCounter from './lesson-11/Context_Api/Components/ClickCounter'
import Section from './lesson-11/Context_Api/Components/Section';
import Counter from './lesson-11/Context_Api/Components/Counter';
import ThemeContext from './lesson-11/Context_Api/Context/ThemeContext';

export default class  App extends React.Component {
  state ={
    theme : 'dark'
  }

  switchTheme = () => {
    this.setState(({theme}) => {
      if(theme === 'dark'){
        return {
          theme : 'light'
        }
       
    } else{
      return 'dark'
    }
  }
    )
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
         <ThemeContext.Provider value={{theme, switchTheme: this.switchTheme}}>
          <Section/>
         </ThemeContext.Provider>
      </div>
    )
  }
 
}


