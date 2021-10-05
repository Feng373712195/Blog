import React, { useEffect,useState } from 'react'
import { withRouter } from 'react-router'
import { Link  } from 'react-router-dom'
import { Menu } from 'antd'

import type { RouteComponentProps } from 'react-router'

interface MenuProps{
  menu:{
    path:string,
    name:string
  }[]
}

function LayoutMenu(props:MenuProps & RouteComponentProps) {

  const [openKeys,setOpenKeys] = useState([props.location.pathname])

  useEffect(()=>{
    setOpenKeys([props.location.pathname])
  },[props.location.pathname])

  return <Menu selectedKeys={openKeys} theme="dark" >
    {props.menu.map(item=><Menu.Item key={item.path} >
      <Link to={item.path} >{item.name}</Link>
    </Menu.Item>)}
  </Menu>
}

export default withRouter(LayoutMenu)
