import React from 'react'
import { Link  } from 'react-router-dom'
import { Menu } from 'antd'

interface MenuProps{
  menu:{
    path:string,
    name:string
  }[]
}

export default function LayoutMenu(props:MenuProps) {
  return <Menu theme="dark" >
    {props.menu.map(item=><Menu.Item  key={item.path} >
      <Link to={item.path} >{item.name}</Link>
    </Menu.Item>)}
  </Menu>
}
