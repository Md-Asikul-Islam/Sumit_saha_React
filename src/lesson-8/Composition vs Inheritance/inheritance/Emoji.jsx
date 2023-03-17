
import React, { Component } from 'react'

export default class Emoji extends Component {
    addEmoji = (text, emoji ) => `${emoji}  ${text}  ${emoji}  `
  render() {
    let text = " I am The Emoji component ";
    if (overrided) text = overrided;
    return (
      <div>
         <h1>{text}</h1>
      </div>
    )
  }
}
