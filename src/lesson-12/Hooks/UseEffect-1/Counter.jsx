import React, { Component } from 'react'

export default class Counter extends Component {
    state = {
        count : 0,
    }

    handleClick = () => {
        this.setState((prevState) => ({
          count : prevState.count + 1 
        }))
    }

    componentDidMount(){
   this.changeTitle();
    }

    componentDidUpdate(prevProps, prevState){
   this.changeTitle();
    }

    changeTitle = () => {
      document.title = `Total clicks ${this.state.count}`;
    }
    valueChanger = (e) => {
      this.setState({
        value : e.target.value ,
      })
    }

  render() {
    const{count, value} = this.state;
    return (
      <div>
         <p> Total clicks {count}</p>
         <button type='button'  onClick={this.handleClick}>Click me </button>
         <br/>
         <input type="text" value={value}  onChange={this.valueChanger}/>
      </div>
    )
  }
}