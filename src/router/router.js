import Router from 'vue-router'
import App from '../App.vue'
import foo from '../foo.vue'
import find from '../find.vue'

//每个路由映射一个组件
const routes = [
  {
    path: '/', component: App,
    children: [
      {
        path: '/foo', component: foo
      },
      {
        path: '/find', component: find
      },
    ]
  }
]

//创建router实例,然后传入'routes'配置
export default new Router({
  routes
})