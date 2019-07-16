import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 饿了么ui相关
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


// 全局导入样式
import './assets/base.scss'

// 导入router
import router from './router/router'
new Vue({
  render: h => h(App),
  // 挂载到vue实例上
  router
}).$mount('#app')
