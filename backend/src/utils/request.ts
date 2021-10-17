import axios from 'axios'
import request from '@/utils/request';
import config from '@/config';



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

instance.interceptors.response.use(function (response) {
  return response.data;
});

export default instance
