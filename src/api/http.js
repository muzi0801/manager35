// 导入axios
import axios from 'axios'

// 创建一个副本 设置基地址
const http = axios.create({
    baseURL:'http://localhost:8888/api/private/v1/'
})

// 暴露和接口相关的方法即可
// 接口抽取 登录验证接口
export const login = ({username,password})=>{
    return http.post('login',{
        username,
        password
    })
}

// 接口抽取 用户数据列表
export const users  = ({query,pagenum,pagesize})=>{
    // get请求的参数  如何自动拼接
    return http.get('users',{
        params:{
            query,
            pagenum,
            pagesize
        },
        // 自行设置请求头
        headers:{
            Authorization:window.localStorage.getItem('token')
        }
    })
}