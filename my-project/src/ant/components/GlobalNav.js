import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Menu, Dropdown, Icon, Drawer, Row, Col} from 'antd'
import "antd/dist/antd.css";
import Dashboard from '../routes/Course/components/Dashboard';
const dark = 'hsl(200, 20%, 20%)'
const light = '#fff'
const styles = {}

styles.wrapper = {
  overflow: 'hidden',
  background : dark,
  color: light
}

// const SideMenu;
class GlobalNav extends Component {

  constructor(props, context) {
    super(props, context)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    alert('log out')
  }
  handleClick = (e) => {
    console.log('click ', e);
  }

  render() {
    const { user } = this.props
    return (
      <div style={styles.wrapper}></div>
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
