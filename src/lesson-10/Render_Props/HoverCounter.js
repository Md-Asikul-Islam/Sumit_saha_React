import React, { Component } from 'react'

export default class HoverCounter extends Component {
    state = {
        count: 0,
    };
  
    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
  
  render() {
    const {count} = this.state;
    return (
      <div>
         <h1 type="text" onMouseOver={this.incrementCount} > Mouse {count} Over </h1>
      </div>
    )
  }
}

