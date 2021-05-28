import { request } from '@/utils/request';

export const GetRouer = ()=>{
    return request({
        url: 'getRouter',
        method: 'GET',
    });
}