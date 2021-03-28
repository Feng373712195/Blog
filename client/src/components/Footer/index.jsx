import React,{ Component, Fragment } from 'react'
import ReactDom from 'react-dom'

import './style.scss'

function Footer(){
    return <footer className="footer" >
       <a href="http://wuzefneg.cn" >wuzefeng 技术博客</a><br/>
       <a href="http://www.miitbeian.gov.cn">备案号：粤ICP备18034923号</a>
    </footer>
}

export default Footer;
