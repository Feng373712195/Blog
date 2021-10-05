import React, { lazy, Suspense } from 'react'
import { withRouter } from 'react-router'
import {
  Redirect,
  Switch,
  Route
 } from 'react-router-dom'

import { Layout ,Spin,Button } from 'antd'
import Menu from './Menu'
import s from './index.module.less'

const { Header:AntdHeader, Sider, Content:AntdContent , Footer } = Layout;

const menu = [
  { name:'发布文章',path:'/publish',Component:lazy(()=>import('@/pages/Publish')) },
  { name:'文章草稿',path:'/articles',Component:lazy(()=>import('@/pages/Articles')) },
  { name:'文章管理',path:'/drafts',Component:lazy(()=>import('@/pages/Drafts')) },
  { name:'标签管理',path:'/lables',Component:lazy(()=>import('@/pages/Lables')) }
]

const Header = withRouter(function _Header(props) {
  const route = menu.find(i=>i.path === props.location.pathname)
  return <AntdHeader className={s['site-layout-header']} >{route ? route.name : ''}</AntdHeader>
})

function Content() {
  return <AntdContent className={s['site-layout-content']}>
    <Switch>
      {menu.map(({ Component,...item })=>{
        return <Route key={item.path} path={item.path} >
          <Suspense fallback={<div className={s.loading} ><Spin tip="Loading..." /></div>} >
            <Component />
          </Suspense>
        </Route>
      })}
    </Switch>
    <Redirect to={menu[0].path} />
  </AntdContent>
}

export default function AppLayout(){
  return <Layout style={{ height:'100vh' }} >
    <Sider>
      <div className={s.logo} >WUZEFENG博客管理后台</div>
      <Menu menu={menu} />
    </Sider>
    <Layout className={s['site-layout']} >
      <Header />
      <Content />
      <Footer style={{ textAlign: 'center' }}>WUZEFENG BLOG ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
}
