import React, { useRef } from 'react'
import { Modal, Button, message } from 'antd';
import { upload } from './api'
import config from '@/config'
import s from './index.module.less'

interface UploadImageProps {
  visable:boolean,
  onClose:()=>void,
  onSuccess:(path:string,files:FileList)=>void
}

export default function UploadImage(props:UploadImageProps){
  const uploadImageInputRef = useRef<HTMLInputElement>(null)

  const onUpload = async ()=>{
    const files = uploadImageInputRef.current.files
    let res = await upload(files);
    if(res.success === true){
      message.success(`图片上传成功`)
      props.onClose();
      props.onSuccess(`${config.baseApi}${res.data}`,files)
    }else{
      message.error(`图片上传失败：${res.message}`)
    }
  }

  return <Modal
    footer={null}
    title="选择上传图片" visible={props.visable}>
    <input accept="image/*" ref={uploadImageInputRef} id="uploadImg" type="file" multiple />
    <Button onClick={onUpload} className={s['upload-btn']} type="primary">上传图片</Button>
  </Modal>
}
