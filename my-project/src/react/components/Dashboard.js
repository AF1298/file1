import React, { Component } from 'react'
import { Link } from 'react-router'

class Dashboard extends Component {
  render() {
    const { courses } = this.props

    return (
      <div>
        <h2>Heii ... Welcome to React</h2>
      </div>
    )
  }
}

export default Dashboard
