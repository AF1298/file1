import React from 'react';
import { Button, Menu, Dropdown, Icon, Drawer, Layout, DatePicker} from 'antd'
import "antd/dist/antd.css";
const { Header, Sider, Content } = Layout;
import {Provider, connect} from 'react-redux';

const SubMenu = Menu.SubMenu;
export default class Root extends React.Component {

    
    componentDidCatch(error, info) {
        console.log(error, info);
    }
    state = {
        collapsed: false,
      };
    
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render() {

        let ret = 
                <Provider store={this.state.store}>
                    <div style={{marginTop: 45}}>
                <Layout>
                    <Sider
          trigger={null}
          collapsed={this.state.collapsed}
          width = {250}
          theme = "light"
        >
          <div className="logo" />
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Button type="primary" style={{marginLeft : '20px'}} onClick={this.toggle}>
                <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                />
            </Button>
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 690,
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
                    </div>
                </Provider>

        return ret;
    }
}
