/*
 * @Author: lianghaolv 
 * @Date: 2021-09-15 15:21:05 
 * @Last Modified by: lianghaolv
 * @Last Modified time: 2021-11-25 16:33:06
 */

import axios from 'axios'; // 引入axios

//请求失败的错误同意处理
const errorHandle = (status, other) => {
    switch (status) {
        //401:未登录状态处理
        case 401:
            //逻辑代码
            break;
        default:
            console.log(other);
    }
}

//创建axios实例
let instance = axios.create({
    timeout: 1000 * 12,//设置12秒
    // withCredentials: true, //是否携带header
})



//请求拦截
instance.interceptors.request.use(
    config => {
        let token = 'token';//这里只是模拟token，一般都会有getToken的方法获取token。
        token && (config.headers.token = token);//存在token才将token放到请求的头部。
        console.log(config);
        return config;
    }, error => {
        return Promise.reject(error);
    }
)

//拦截响应
instance.interceptors.response.use(
    //请求成功
    response => {
        const { data, status } = response; //返回的数据格式应该统一和后端定义

        if (status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    //请求失败
    error=>{
        const {response} = error;
        // 请求已发出，但是不在2xx的范围 
        if(response){
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        }else{
            return Promise.reject(error);
        }
    }
)

export default axios;