import React,{ useState, useContext , useEffect , useRef , useCallback } from 'react'
import { InboxOutlined,PlusOutlined } from '@ant-design/icons'
import { Select,Empty,Button,Input,Tag,Spin,message } from 'antd'
import { LayoutContext } from '@/components/Layout'

// import SimpleMDE from "react-simplemde-editor";
// import "easymde/dist/easymde.min.css";

import Editor from './Editor'
import s from './index.module.less'

type Article = {
  title:string,
  content:string,
  labels:string[],
  files:File[],
}

const getDefaultArticle:()=>Article = ()=>{
  return { title:'', content:'', labels:[], files:[] }
}

function ChooseLabel(props:{
  labels:Article['labels'],
  onChange:(labels:Article['labels']) => void
}) {

  const [labelText,setLabelText] = useState('')
  const [loading,setLoading] = useState(false)
  const [options,setOptions] = useState([]);

  const onChangeLabelText = (e)=>{
    const text = e.target.value;
    setLabelText(text)
  }

  const addLabel = ()=>{
    const has = [...options,...props.labels].find(i=>i === labelText)
    if(has) {
      message.info('不能添加重复的标签')
      return
    }
    setLabelText('')
    props.onChange([...props.labels,labelText])
  }

  const onChangeLabel = (_labels)=>{
    props.onChange(_labels)
  }

  return <Select
    className={s['labels-select']}
    mode="multiple"
    value={props.labels}
    loading={loading}
    onChange={onChangeLabel}
    style={{ width: 240, marginRight:'12px' }}
    placeholder="请选择标签"
    dropdownRender={menu => <Spin spinning={loading} >
    <div className={s['labels-warp']} >
      {options.length === 0 ? <div className={s["labels-empty"]} >
        <InboxOutlined />
        <span>没有标签</span>
      </div> : <div className={s['labels']} >{menu}</div>
      }
      {/* 添加标签 */}
      <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
        <Input placeholder="请输入标签..." size="small" style={{ flex: 'auto' }} value={labelText} onChange={onChangeLabelText} />
        <a style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }} onClick={addLabel} >
          <PlusOutlined /> 添加标签
        </a>
      </div>
    </div>
  </Spin>}>
    {options.map((option,index)=><Select.Option value={option} key={index}>{option}</Select.Option> )}
  </Select>
}

export default function Publish() {

  const [preview,showPreview] = useState(false)
  const uploadFileInputRef = useRef<HTMLInputElement>()
  const [article,setArticle] = useState<Article>(getDefaultArticle())
  const { setHeaderExtend } = useContext(LayoutContext)

  const onUpdateArticle = (key:string,value:any)=>{
    setArticle(Object.assign({ ...article },{ [key]:value }))
  }

  useEffect(()=>{
    setHeaderExtend({
      render:()=><div className={s.ctr} >
        <ChooseLabel labels={article.labels} onChange={labels=>onUpdateArticle('labels',[...labels])} />
        <Button type="primary" ghost >保存草稿</Button>
        <Button type="primary" >发布</Button>
        <Button type="text" style={{ marginLeft:'12px' }} >返回</Button>
      </div>
    })
  },[article.labels])

  const removeFile = (index)=>{
    article.files.splice(index,1);
    onUpdateArticle('files',article.files)
  }

  const Files = useCallback(()=>{
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
