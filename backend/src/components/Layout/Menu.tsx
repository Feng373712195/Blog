import React, { useEffect,useState } from 'react'
import { withRouter } from 'react-router'
import { Link  } from 'react-router-dom'
import { Menu } from 'antd'

import type { MenuType } from './router'
import type { RouteComponentProps } from 'react-router'

interface MenuProps{ menu:MenuType }

function LayoutMenu(props:MenuProps & RouteComponentProps) {

  const _menu = (props.menu || []).filter(i=>!i.hide)
  const [openKeys,setOpenKeys] = useState([props.location.pathname])

  useEffect(()=>{
    const route = _menu.find(i=> props.location.pathname.indexOf(i.path) !== -1)
    setOpenKeys(route ? [route.path] : [])
  },[props.location.pathname])

  return <Menu selectedKeys={openKeys} theme="dark" >
    {_menu.map(item=><Menu.Item key={item.path} >
      <Link to={item.path} >{item.name}</Link>
    </Menu.Item>)}
  </Menu>
}

export default withRouter(LayoutMenu)
