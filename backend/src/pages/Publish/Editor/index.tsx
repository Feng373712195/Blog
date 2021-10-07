import React, { useState,useEffect,useMemo,useCallback,useRef } from 'react';
import { Input,Tooltip } from 'antd'
import s from './index.module.less'

import { getRange,setRange }  from './range'

type ToolType = { icon:string,tooltip:string,type:string }

function EditorTools(props:{
  el:HTMLTextAreaElement ,
  onUpdate:(text:string) => void,
  onPrevire:(preview:boolean)=>void,
}) {

  const [preview,setPreview] = useState(false)

  useEffect(()=>{
    props.onPrevire(preview)
  },[preview])

  const tools = useMemo(()=>({
    font:{
      bold:{
        icon:'iconfont icon-bold',
        tooltip:"粗体",
        type:'bold'
      },
      Italics:{
        icon:'iconfont icon-xieti',
        tooltip:"斜体",
        type:'Italics'
      },
      title:{
        icon:'iconfont icon-biaoti',
        tooltip:"标题",
        type:'title'
      }
    },
    block:{
      quote:{
        icon:'iconfont icon-quote',
        tooltip:"引用",
        type:'quote'
      },
      code:{
        icon:'iconfont icon-ai-code',
        tooltip:"代码",
        type:'code'
      }
    },
    list:{
      commonlist:{
        icon:'iconfont icon-liebiao',
        tooltip:"普通列表",
        type:'commonlist'
      },
      numberlist:{
        icon:'iconfont icon-shuziliebiao',
        tooltip:"数字列表",
        type:'numberlist'
      }
    },
    link:{
      hyperlink:{
        icon:'iconfont icon-chaolianjie',
        tooltip:"超链接",
        type:'hyperlink'
      },
      picture:{
        icon:'iconfont icon-tupian',
        tooltip:"图片",
        type:'picture'
      },
      video:{
        icon:'iconfont icon-shipin',
        tooltip:"视频",
        type:'video'
      }
    },
    funs:{
      clean:{
        icon:'iconfont icon-eraser',
        tooltip:"清空",
        type:'clean'
      },
      preview:{
        icon:'iconfont icon-yula',
        tooltip:"预览模式",
        type:'preview'
      }
    }
  }),[])

  const toolHandle = (el,type) => {

		let selection = getRange(el)

		switch(type){
			case 'bold' :
				setRange(el,`**${selection}**`)
        break;
			case 'Italics' :
				setRange(el,`*${selection}*`)
        break;
			case 'title' :
				setRange(el,`###${selection}`)
        break;
			case 'quote' :
				setRange(el,`>${selection}`)
        break;
			case 'code' :
				setRange(el,` \`\`\`javascript \n ${selection} \n \`\`\` `)
        break;
			case 'commonlist' :
				setRange(el,`-${selection}`)
        break;
			case 'numberlist' :
				setRange(el,`1.${selection}`)
        break;
			case 'hyperlink':
				el.value += `[](http://)`
        break;
			case 'picture':
				this.setState({ showUploadImgModal:true })
				break;
			case 'video':
				el.value += `!![](http://)`
			case 'clean':
        el.value = ''
				break;
			case 'preview':
        setPreview(!preview)
				break;
			default:
        break;
		}

    props.onUpdate(props.el.value)
	}

  const Tool = useCallback((_props:{ tool:ToolType })=>{
    const { tool } = _props
    return <li onClick={()=>toolHandle(props.el,tool.type)} >
      <Tooltip placement="top" title={tool.tooltip}>
        <span className={tool.icon} ></span>
      </Tooltip>
    </li>
  },[props.el])

  const Tools = useCallback(()=>{
    return <>
      {Object.keys(tools).reduce((l,type)=>{
        return l.concat(
          [<li key={type} className={s.cut}></li>],
          Object.values(tools[type]).map((tool:ToolType)=><Tool key={tool.type} tool={tool} />)
        )
      },[] as JSX.Element[])}
    </>
  },[props.el])

  return <ul className={s['editor-tools']}>
    <Tools />
  </ul>
}

export default function Editor(props:{
  onChange:(value:string)=>void
}) {

  const ref = useRef<HTMLTextAreaElement>()
  const [text,setText] = useState('')

  useEffect(()=>{
    props.onChange(text)
  },[text])

  const _onChange = (e)=>{
    const text = e.target.value
    setText(text)
  }

  return <div className={s.editor} >
    <EditorTools onPrevire={()=>{}} onUpdate={setText} el={ref.current} />
    <Input.TextArea ref={(_ref) =>ref.current = _ref?.resizableTextArea.textArea}
      id="editor-textarea"
      className={s['editor-textarea']}
      onChange={_onChange}
      value={text} >
    </Input.TextArea>
  </div>
}
