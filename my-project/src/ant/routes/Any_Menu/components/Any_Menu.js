import React, { Component } from 'react'

class Any_Menu extends Component {

  render() {
    const data = { text : "Haiii World ..."}
    return (
      <div>
        <h2>Any Menu ....</h2>
        <h4> {data.text} </h4>
      </div>
    )
  }

}

module.exports = Any_Menu 
