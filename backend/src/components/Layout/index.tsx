import React from 'react'
import { Layout, Menu ,Button } from 'antd'
import s from './index.module.less'

const { Header, Sider, Content } = Layout;

export default function AppLayout(){
  return <Layout style={{ height:'100vh' }} >
    <Sider>
      <div className={s.logo} >WUZEFENG</div>
      <Menu>
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.Item>3</Menu.Item>
        <Menu.Item>4</Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Header></Header>
      <Content>
        Content11
      </Content>
    </Layout>
  </Layout>
}
