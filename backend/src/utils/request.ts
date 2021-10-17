import axios, { AxiosResponse,AxiosRequestConfig } from 'axios'
import request from '@/utils/request';
import config from '@/config';



type SuccessRespone<T> = {
  success:true,
  code:number
  data:T,
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


const creatPostMethodRequest = function (method:string) {
  return function<D,T extends AxiosRequestConfig<Respone<T>>>(url:string,config?:AxiosRequestConfig<D>) {
    return instance[method]<D,T>(url,config)
  }
}

const creatGetMethodRequest = function (method:string) {
  return function<P,T>(url:string,config?:AxiosRequestConfig<P>) {
    return instance.get<P,Respone<T>>(url,config)
  }
}

const get = creatGetMethodRequest('get')
const post = creatPostMethodRequest('post')
const put = creatPostMethodRequest('put')
const _delete = creatPostMethodRequest('delete')


export default { ...instance , get,post,put,delete:_delete }
