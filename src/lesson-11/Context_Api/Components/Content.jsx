import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../Context/ThemeContext';

export default function Content() {
    
    return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(counter, incrementCount) => {
                      return <ThemeContext.Consumer>
                         { ({theme ,switchTheme}) =>  <HoverCounter
                      count={counter} incrementCount ={incrementCount} theme = {theme}
                      switchTheme = {switchTheme}
                     />}
                      </ThemeContext.Consumer>
                }}
            </Counter>
        </div>
    );
}
