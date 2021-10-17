import request, { Respone } from '@/utils/request';

export const upload = (files:FileList)=>{
  let formData = new FormData()
  Array.from(files).map((file,index) => formData.append(`file${index}`,file))
  return request.put<FormData,Respone<string>>('/upload',formData)
}
