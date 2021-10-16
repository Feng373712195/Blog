import request from '@/utils/request';

export const upload = (files)=>{
  let formData = new FormData()
  Array.from(files).map((file,index) => formData.append(`file${index}`,file))
  return request.put('/upload',formData)
}
