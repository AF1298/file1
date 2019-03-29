/*globals COURSES:true */
import React, { Component } from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'

class App extends Component {
  
  render() {
    return (
      <div>
        <GlobalNav />
        <div>
          {< Dashboard data = {this.props.children}/> || <Dashboard/>}
        </div>
      </div>
    )
  }
}

module.exports = App
