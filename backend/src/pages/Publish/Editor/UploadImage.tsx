import React, { useRef } from 'react'
import { Modal, Button, message } from 'antd';
import { upload } from './api'
import s from './index.module.less'

interface UploadImageProps {
  visable:boolean
}

export default function UploadImage(props:UploadImageProps){
  const uploadImageInputRef = useRef<HTMLInputElement>(null)

  const onUpload = async ()=>{
    const files = uploadImageInputRef.current.files
    let res = await upload(files);
    console.log(res,'res')
    if(res.success === true){
      console.log(res.data)
    }else{
      message.error(`上传失败：${res.message}`)
    }
  }

  return <Modal
    footer={null}
    title="选择上传图片" visible={props.visable}>
    <input accept="image/*" ref={uploadImageInputRef} id="uploadImg" type="file" multiple />
    <Button onClick={onUpload} className={s['upload-btn']} type="primary">上传图片</Button>
  </Modal>
}
