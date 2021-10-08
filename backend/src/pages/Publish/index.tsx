import React,{ useState, useContext , useEffect , useRef , useCallback } from 'react'
import { InboxOutlined,PlusOutlined } from '@ant-design/icons'
import { Select,Empty,Button,Input,Tag,Spin } from 'antd'
import { LayoutContext } from '@/components/Layout'

// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";

import Editor from './Editor'
import s from './index.module.less'

type Article = {
  title:string,
  content:string,
  lables:[],
  files:File[],
}

const getDefaultArticle:()=>Article = ()=>{
  return { title:'', content:'', lables:[], files:[] }
}

function ChooseLable() {

  const [lables,setLables] = useState([])
  const [loading,setLoading] = useState(false)
  const [lableValue,setLableValue] = useState('')

  const onChange = (e)=>{
    setLableValue(e.target.value)
  }

  const addLable = ()=>{}

  const onChangeLable = ()=>{}

  return <Select
    mode="multiple"
    value={['111']}
    loading={loading}
    onChange={onChangeLable}
    style={{ width: 240, marginRight:'12px' }}
    placeholder="请选择标签"
    dropdownRender={menu => <Spin spinning={loading} >
    <div>
      {lables.length === 0 ? <div className={s["lables-empty"]} >
        <InboxOutlined />
        <span>没有标签</span>
      </div> : menu}
      {/* 添加标签 */}
      <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
        <Input placeholder="请输入标签..." size="small" style={{ flex: 'auto' }} value={lableValue} onChange={onChange} />
        <a style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }} onClick={addLable} >
          <PlusOutlined /> 添加标签
        </a>
      </div>
    </div>
  </Spin>}>
    {lables.map(option=><Select.Option value={option.name} key={option.name}>{option.name}</Select.Option> )}
  </Select>
}

export default function Publish() {

  const [preview,showPreview] = useState(false)
  const uploadFileInputRef = useRef<HTMLInputElement>()
  const [article,setArticle] = useState<Article>(getDefaultArticle())
  const { setHeaderExtend } = useContext(LayoutContext)

  const onUpdateArticle = (key:string,value:any)=>{
    setArticle(Object.assign({},article,{ [key]:value }))
  }

  useEffect(()=>{
    setHeaderExtend({
      render:()=><div className={s.ctr} >
        <ChooseLable />
        <Button type="primary" ghost >保存草稿</Button>
        <Button type="primary" >发布</Button>
        <Button type="text" style={{ marginLeft:'12px' }} >返回</Button>
      </div>
    })
  },[])

  const removeFile = (index)=>{
    article.files.splice(index,1);
    onUpdateArticle('files',article.files)
  }

  const Files = useCallback(()=>{
    console.log(article.files , 'files')
    return <>
      {article.files.map((file,index)=>{
        return <Tag key={index} onClose={()=>removeFile(index)} closable className={s["file"]} >
          <div>
            <span className={s["file-name"]}>{file.name}</span>
            <span className={s["file-size"]}>{`${(parseInt(String(file.size / 1024))).toLocaleString('en-US')}KB`}</span>
          </div>
        </Tag>
      })}
    </>
  },[article.files])

  const onChangeTitle = (e)=>{
    onUpdateArticle('titile',e.target.value)
  }

  const chooseFiles = ()=>{
    if(uploadFileInputRef.current) uploadFileInputRef.current.click();
  }

  const choosedFiles = ()=> {
    const files = uploadFileInputRef.current.files
    onUpdateArticle('files',article.files.concat(Array.from(files)))
  }

  return <div className={s.form} >

    <div className={s['form-item']} >
      <h3>文章标题</h3>
      <Input placeholder="文章标题..." value={article.title} onInput={onChangeTitle}  />
    </div>
    <div className={s['form-item']} >
      <h3>文章标题</h3>
      <Editor onChange={()=>{}} />
    </div>
    <div className={s['form-item']}>
      <h3>上传附件</h3>
      <Files />
      <Button type="primary" onClick={chooseFiles} >请选择要上传附件</Button>
			<input ref={uploadFileInputRef} className={s["uplpad-file"]} type='file' onChange={choosedFiles} multiple />
    </div>

  </div>
}
