import React, { Component } from 'react'

export default class Home extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment = () => {
        this.setState({
            count:this.state.count + 1
        })
    }
    decrement = () => {
        this.setState({
            count:this.state.count - 1
        })
    }
    
  render() {
    const {count} = this.state

    return (
      <div className='btn'>
         <h1>count:{count}</h1>
         <button className='inc' onClick={this.increment}>+</button>
         <button className='dec' onClick={this.decrement}>-</button>
      </div>
    )
  }
}