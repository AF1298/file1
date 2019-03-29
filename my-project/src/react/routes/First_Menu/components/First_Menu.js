import React, { Component } from 'react'

class First_Menu extends Component {
  render() {
    const events = [
      { id: 0, title: 'heloow World ...' }
    ]

    return (
      <div>
        <h2>First Menu</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>{event.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = First_Menu
