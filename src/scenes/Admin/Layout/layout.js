import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity, faMapMarkedAlt, faFile} from '@fortawesome/free-solid-svg-icons';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed} = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark"  mode="inline">
            <Menu.Item key="1" icon={<TeamOutlined />}>
            <Link to={`/admin/user`} > User </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FontAwesomeIcon icon={faFile}/>}>
            <Link to={`/admin/review`} > Review </Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<FontAwesomeIcon icon={faMapMarkedAlt} />}>
            <Link to={`/admin/place`} > Place </Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FontAwesomeIcon icon={faCity} />}>
            <Link to={`/admin/city`} > City </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>    
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SiderDemo;


