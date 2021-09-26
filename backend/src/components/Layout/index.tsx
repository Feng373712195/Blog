import React from 'react'
import { Layout,Menu } from 'antd'

const { Header, Sider, Content } = Layout;

export default function AppLayout(){
  return <Layout>
    <Sider>
      {/* <Menu>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.Item>3</Menu.Item>
        <Menu.Item>4</Menu.Item>
      </Menu> */}
    </Sider>
    <Layout>
      <Header></Header>
      <Content>Content</Content>
    </Layout>
  </Layout>
}
