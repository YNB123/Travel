// import VueRouter from 'vue-router'
// import routerInterceptor from '../common/interceptor/routerInterceptor'
// import demoRouter from '../modules/demo/demo_router'

// export default function () {
//   // 路由配置
//   let router = new VueRouter({
//     routes:[]
//   });

//   //路由拦截
//   routerInterceptor(router);

//   //加载各模块的路由
//   demoRouter(router);

//   return router;
// }


// my self 
 import Vue from 'Vue'
 import Router from 'vue-router'
 import home from '@/pages/home/home'


 Vue.use(Router)

 export default new Router({
  routes:[{
   path:'/',
   name:'home',
   component:home
  }]

 })
