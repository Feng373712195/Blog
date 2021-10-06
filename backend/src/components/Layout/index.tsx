import React, { Suspense, useState } from 'react'

import {
  Redirect,
  Switch,
  Route
 } from 'react-router-dom'

import { Layout ,Spin } from 'antd'
import Header from './Header'
import Menu from './Menu'
import { menu } from './router'

import s from './index.module.less'

const { Header:AntdHeader, Sider, Content:AntdContent , Footer } = Layout;

function Content() {
  return <AntdContent className={s['site-layout-content']}>
    <Switch>
      {menu.map(({ Component,...item })=>{
        return <Route  key={item.path} path={item.path} >
          <Suspense fallback={<div className={s.loading} ><Spin tip="Loading..." /></div>} >
            <Component />
          </Suspense>
        </Route>
      })}
      <Redirect from="/" to={menu.find(i=>!i.hide).path} />
    </Switch>
  </AntdContent>
}

type HeaderExtend = { render:()=>JSX.Element }

export const LayoutContext = React.createContext<{
  headerExtend:HeaderExtend,
  setHeaderExtend:React.Dispatch<React.SetStateAction<HeaderExtend>>,
}>({ headerExtend:null , setHeaderExtend:()=>{} })

export default function AppLayout(){
  const [headerExtend,setHeaderExtend] = useState<HeaderExtend>(null)

  return <LayoutContext.Provider value={{ headerExtend,setHeaderExtend }} >
    <Layout style={{ height:'100vh' }} >
      <Sider>
        <div className={s.logo} >WUZEFENG博客管理后台</div>
        <Menu menu={menu} />
      </Sider>
      <Layout className={s['site-layout']} >
        <Header menu={menu} Extend={headerExtend ? headerExtend.render : undefined} />
        <Content />
        <Footer style={{ textAlign: 'center' }}>WUZEFENG BLOG ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  </LayoutContext.Provider>
}
