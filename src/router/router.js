// 导入vue
import Vue from 'vue'

// 路由相关
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 导入组件
import index from '../views/index.vue'
import login from '../views/login.vue'
// 规则
const routes = [
    {
        path: '/login',
        component: login
    },
    {
        path: '/index',
        component: index,
        // 添加元信息
        meta: {
            // 需要验证
            needCheck: true,
            // 是否需要登录
            needLogin: true
        }
    }
]

const router = new VueRouter({
    routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    // console.log(to);
    // 根据地址判断

    if (to.meta.needCheck == true) {
        // 去首页判断登录
        // token
        if (window.localStorage.getItem('token') != undefined) {
            next()
        } else {
            // new一个实例出来
            new Vue().$message.error('你走吧,爸爸不要你了')
            // 不存在
            router.push('/login')
        }
    } else {
        next()
    }
})
// 暴露出去
export default router