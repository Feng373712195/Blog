import React from 'react'
import { withRouter } from 'react-router'
import { Layout } from 'antd'
const { Header:AntdHeader } = Layout

import { menu } from './router'

import type { MenuType } from './router'
import type { RouteComponentProps } from 'react-router'


import s from './index.module.less'


export default withRouter(function _Header(props:RouteComponentProps & { menu:MenuType, Extend?:()=>JSX.Element }) {

  const route = menu.find(i=>i.path === props.location.pathname)
  const Extend = props.Extend;
  return <AntdHeader className={s['site-layout-header']} >
      <div className={s.title} >{route ? route.name : ''}</div>
      <div className={s.extend} >{Extend ? <Extend /> : null }</div>
  </AntdHeader>
})
