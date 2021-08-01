import React, { useState, useMemo } from 'react'
import { Tag, Menu as AntdMenu, Dropdown  } from 'antd';
import { MenuOutlined } from '@ant-design/icons'

import c from 'classnames'
import s from './style.module.less'

const menus = [
  {
    name: '文章',
    path: '/'
  },
  {
    name: '标签',
    path: '/labels'
  },
  {
    name: '关于',
    path: '/about'
  },
]

function Menu (props) {
  const [visibleMenu, setVisibleMenu] = useState(false)
  const currentPath = process.browser ? location.pathname : '/'
  const menuItems = useMemo(() => menus.map((menu) => <AntdMenu.Item href={menu.path} key={menu.path} >{menu.name}</AntdMenu.Item>), [])
  const menu = useMemo(() => <AntdMenu mode="horizontal"
    selectedKeys={currentPath}
    style={{ lineHeight: '64px' }} >
    {menuItems}
  </AntdMenu>, [])
  return <>
        <nav className={s['blog-menu']} >
          {menu}
        </nav>
        <nav className={s['blog-menu-dropdown']} >
          <Dropdown
            onVisibleChange={setVisibleMenu}
            overlay={menu}
            trigger={['click', 'hover']}>
            <a className={c([s['ant-dropdown-link'], visibleMenu ? s['active'] : ''])} href="#">
              <MenuOutlined />
            </a>
          </Dropdown>
        </nav>
    </>
}

function Header (props) {

  return <header className={s.header} >
    <div className={s['blog-name']} >
      <a href="/" target="_self">WU-ZEFENG BLOG</a>
      <Tag closable
        style={{ display: 'none' }}
        key="select-lable"
        color="#108ee9"
        onClose={() => {}} >

      </Tag>
    </div>
    <Menu />
  </header>
}

export default Header

