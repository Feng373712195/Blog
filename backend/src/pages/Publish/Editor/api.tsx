import request from '@/utils/request';

export const upload = (src,files)=>{
  let formData = new FormData()
  formData.append(`files`,files)
  return request.post(src,formData)
}
