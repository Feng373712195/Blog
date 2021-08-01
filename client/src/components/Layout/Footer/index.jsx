import React from 'react';

import s from './style.module.less'

function Footer () {
  return <footer className={s.footer} >
    <a href="http://wuzefneg.cn" >wuzefeng 技术博客</a><br/>
    <a href="http://www.miitbeian.gov.cn">备案号：粤ICP备18034923号</a>
  </footer>
}

export default Footer;
