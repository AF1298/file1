import React, { Component } from 'react'
import { Button, Menu, Dropdown, Icon, Drawer, Layout, DatePicker} from 'antd'
import "antd/dist/antd.css";
const { Header, Sider, Content } = Layout;
import { Link } from 'react-router'

const styles = {}

const SubMenu = Menu.SubMenu;

class Dashboard extends Component {
  state = { visible: false };

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const {data} = this.props
    
    return (
      <Layout>
      <Sider
        trigger={null}
        collapsed={this.state.collapsed}
        width = {250}
        theme = "light"
      >
        <div className="logo" />
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
          <Link to="/ant/First_Menu"><Icon type="user"/><span>Account</span></Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/ant/Second_Menu"><Icon type="form"/><span>Data</span></Link>
          </Menu.Item>
          <Menu.Item key="3">
          <Link to="/ant/Any_Menu"><Icon type="snippets"/><span>Snippets</span></Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Button type="primary" onClick={this.toggle} style={{left : '20px'}}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            />
          </Button>
        </Header>
        <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 690,}} className="coba">
          {data}
        </Content>
      </Layout>
    </Layout>
      
      
    )
  }
}

export default Dashboard
