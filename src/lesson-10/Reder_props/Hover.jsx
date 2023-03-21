import React, { Component } from 'react'

export default class Hover extends Component {
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
          <h1 onMouseOver={this.incrementCount}> Mouse {count} Hover </h1>
      </div>
    )
  }
}
