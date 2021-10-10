import React, { useRef } from 'react'
import { Modal,Button } from 'antd'
import { upload } from './api'
import s from './index.module.less'

interface UploadImageProps {
  visable:boolean
}

export default function UploadImage(props:UploadImageProps){
  const uploadImageInputRef = useRef<HTMLInputElement>(null)

  const onUpload = async ()=>{
    const files = uploadImageInputRef.current.files
    const res = await upload('/upload',files)
  }

  return <Modal
    footer={null}
    title="选择上传图片" visible={props.visable}>
    <input accept="image/*" ref={uploadImageInputRef} id="uploadImg" type="file"/>
    <Button onClick={onUpload} className={s['upload-btn']} type="primary">上传图片</Button>
  </Modal>
}
