import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    timeout: 1000 * 60,
    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true,
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: status => {
        return status >= 200 && status < 300; // default
    },
    baseURL: 'http://43.142.90.39:11111/' // 服务端域名
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export function get(url: string, data?: any) {
    // console.log(data)
    return new Promise((resolve, reject) => {
        instance
            .get(url, {
                params: data || {}
            })
            .then(res => {
                if (res) {
                    // 成功回调
                    const resData = res.data;

                    resolve(resData);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function post(url: string, data: any) {
    return new Promise((resolve, reject) => {
        // showLoadingToast({
        //     overlay:true
        // });

        instance
            .post(url, qs.stringify(data), {
                headers: {
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    'Content-Type': 'application/x-www-form-urlencoded',

                    Accept: 'application/json'
                }
            })
            .then(res => {
                if (res) {
                    // closeToast();

                    // 成功回调

                    const resData = res.data;

                    resolve(resData);
                }
            })
            .catch(error => {
                reject(error);
            });
    });
}
