import React,{ useState, useContext , useEffect } from 'react'
import { Button,Input } from 'antd'
import { LayoutContext } from '@/components/Layout'

// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";

import Editor from './Editor'
import s from './index.module.less'

export default function Publish() {

  const [preview,showPreview] = useState(false)


  const [article,setArticle] = useState({
    title:'',
    content:'',
  })

  const { setHeaderExtend } = useContext(LayoutContext)

  useEffect(()=>{
    setHeaderExtend({
      render:()=><div className={s.ctr} >
        <Button type="primary" ghost >保存草稿</Button>
        <Button type="primary" >发布</Button>
        <Button type="text" style={{ marginLeft:'12px' }} >返回</Button>
      </div>
    })
  },[])

  const onChangeTitle = (e)=>{
    setArticle(Object.assign(article,{  titile:e.target.value }))
  }

  return <div className={s.form} >

    <div className={s['form-item']} >
      <h3>文章标题</h3>
      <Input placeholder="文章标题..." value={article.title} onInput={onChangeTitle}  />
    </div>
    <div className={s['form-item']} >
      <h3>文章标题</h3>
      <Editor />
    </div>

  </div>
}
