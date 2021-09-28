import React from 'react'
import { Layout, Menu ,Button } from 'antd'
import s from './index.module.less'

const { Header, Sider, Content } = Layout;

export default function AppLayout(){
  return <Layout style={{ height:'100vh' }} >
    <Sider>
      <div className={s.logo} >WUZEFENG博客管理后台</div>
      <Menu theme="dark" >
        <Menu.Item>发布文章</Menu.Item>
        <Menu.Item>文章草稿</Menu.Item>
        <Menu.Item>文章管理</Menu.Item>
        <Menu.Item>标签管理</Menu.Item>
      </Menu>
    </Sider>
    <Layout>
      <Content>

      </Content>
    </Layout>
  </Layout>
}
