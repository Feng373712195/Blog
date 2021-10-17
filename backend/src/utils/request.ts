import axios from 'axios'



type SuccessRespone<T> = {
  success:true,
  code:number
  data:T | never,
}

 type FailRespone = {
  success:false,
  code:number
  data:null,
  message:string,
}

export type Respone<T> = (SuccessRespone<T> | FailRespone)

const instance = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

export default instance
