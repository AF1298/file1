import React, { Component } from 'react'
import { Link } from 'react-router'

const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  padding: '10px 20px',
  overflow: 'hidden',
  background: dark,
  color: light
}

styles.link = {
  padding: 11,
  color: light,
  fontWeight: 200
}

styles.activeLink = {
  ...styles.link,
  background: light,
  color: dark
}

class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }

  render() {
    const { user } = this.props

    return (
      <div style={styles.wrapper}>
        <div style={{ float: 'left' }}>
      <Link to="/react" style={styles.link}>Home</Link>
      <Link to="/react/First_Menu" style={styles.link} activeStyle={styles.activeLink}>First Menu</Link>
      <Link to="/react/Second_Menu" style={styles.link} activeStyle={styles.activeLink}>Second Menu</Link>
      <Link to="/react/Any_Menu" style={styles.link} activeStyle={styles.activeLink}>Any Menu</Link>
        </div>
        {/* <div style={{ float: 'right' }}>
      <Link style={styles.link} to="/react/profile">{user.name}</Link> <button onClick={this.logOut}>log out</button>
        </div> */}
      </div>
    )
  }
}

GlobalNav.defaultProps = {
  user: {
    id: 1,
    name: 'Aidil Febrian'
  }
}

export default GlobalNav
