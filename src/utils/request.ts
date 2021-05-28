
import axios from 'axios';
const baseurl = "https://www.fastmock.site/mock/ba826114c33f471de85d25871ac3fc01/api/"
// @ts-ignore
const instance = axios.create({
  timeout: 10000,
  // headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// 添加请求拦截器
// tslint:disable-next-line:only-arrow-functions
instance.interceptors.request.use(function (config) {

  return config;
}, function (error) {
  console.log(error)
  return Promise.reject(error);
});

// 添加响应拦截器
// tslint:disable-next-line:only-arrow-functions
instance.interceptors.response.use(function (response) {

  return response;
  // tslint:disable-next-line:only-arrow-functions
}, function (error) {
  // 对响应错误做点什么

  return Promise.reject(error);
});


export const request = (options: any) => {
  return new Promise((resolve, reject) => {
    if (options.method === 'GET' || options.method === 'DELETE') {
      instance({
        method: options.method,
        url: `${baseurl}${options.url}`,
      }).then((response) => {
 
        return resolve(response);
      }).catch(function (error) {

      });
    }
    if (options.method === 'POST' || options.method === 'PUT') {
      instance({
        method: options.method,
        url: `${options.url}`,
        data: options.data,
      }).then((response) => {
        return resolve(response.data);
      });
    }
  });
};
