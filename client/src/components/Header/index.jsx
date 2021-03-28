import React,{ useEffect,useState } from 'react'
import { Tag,Menu,Dropdown  } from 'antd';
import { MenuOutlined } from '@ant-design/icons'

// import { withRouter } from 'react-router'
// import { connect } from 'react-redux';
// import { UNSELECT_LABLE, } from '@store/actions/lable'
// import { getArticles,CLEAN_ARTICLES,FIRST_ARTILES_LIST_PAGE } from '@store/actions/articles'

import './style.less'

const handleClick = (props,e)=>{
    props.history.push(e.key)
}

const getActiveSelect = (route) => {
    route = route ? route : window.location.href
    if( route ){
        if(~route.indexOf("/article") ) return ["/article"]
        if(~route.indexOf("/labels") ) return ["/labels"]
        if(~route.indexOf("/about") ) return ["/about"]
    }
    return ["/article"];
}

// const unSelectLable = (props) => {
//     // 清空选中标签
//     const { dispatch } = props;
//     dispatch({ type:UNSELECT_LABLE });
//     // 清空已加载文章
//     dispatch({ type:CLEAN_ARTICLES })
//     // 恢复到第一页
//     dispatch({ type:FIRST_ARTILES_LIST_PAGE })
//     // 重新获取文章列表
//     dispatch( getArticles({},1,10,true) );
// }

function HeaderMenu(selectNav,props){
    return <Menu mode="horizontal"
            selectedKeys={ selectNav }
            onClick={handleClick.bind(null,props)}
            style={{ lineHeight: '64px' }} >
            <Menu.Item key="/article">
                文章
            </Menu.Item>
            <Menu.Item key="/labels">
                标签
            </Menu.Item>
            <Menu.Item key="/about">
                关于
            </Menu.Item>
        </Menu>
}

function Header(props){
    const { selectlable } = props;
    const [ visibleMenu,setVisibleMenu ] = useState(false)
    const [ selectNav,setSelectNav ] = useState(getActiveSelect(location.pathname))

    // props.history.listen(()=>{
    //     setSelectNav( getActiveSelect(location.pathname) );
    // })

    return <header className="header" >
                <div className="blog-name" >
                    <a href="/" target="_self">WU-ZEFENG BLOG</a>
                    { false && <Tag
                         closable
                         key="select-lable"
                         color="#108ee9"
                        //  onClose={unSelectLable.bind(null,props)}
                        >
                        {selectlable}
                      </Tag> }
                </div>
                <nav className="blog-menu" >
                    {HeaderMenu(selectNav,props)}
                </nav>
                <nav className="blog-menu-dropdown" >
                    <Dropdown  onVisibleChange={(visible)=>{ setVisibleMenu(visible) }}
                               overlay={HeaderMenu(selectNav,props)}
                               trigger={['click','hover']}>
                        <a className={ ["ant-dropdown-link" ,visibleMenu ? 'active' : ''] } href="#">
                            {/* <Icon type="menu" /> */}
                            <MenuOutlined />
                        </a>
                    </Dropdown>
                </nav>
          </header>
}

// function select(state){
//     return{
//         selectlable:state.lables.selectlable,
//         route:state.history
//     }
// }
// export default connect(select)(withRouter(Header));

export default Header

