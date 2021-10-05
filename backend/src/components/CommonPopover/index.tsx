import React, { useState } from 'react';
import { Button,Popover } from 'antd'

import s from './index.module.less'

export default function CommonPopover(props:{
  children:JSX.Element,
  onSure:()=>void,
  title:string,
}) {
  const [visable,setVisable] = useState(false)

  return <Popover visible={visable}
    onVisibleChange={_v=>setVisable(_v)}
    trigger="click"
    title={<div className={s.content} >{props.title}</div>}
    content={<div className={s.btns}>
    <Button onClick={()=>setVisable(false)} size="small" >取消</Button>
    <Button size="small" onClick={props.onSure} danger>确定</Button>
  </div>} >
      {props.children}
  </Popover>
}
