export default function (router) {
  router.addRoutes([
    {path:'/',component: resolve => require(['./home.vue'], resolve)},
    {path:'/qj',component: resolve => require(['./vue/demo.vue'], resolve)},
    {path:'/demo2',component: resolve => require(['./vue/demo2.vue'], resolve)},
    {path:'/qj2',component: resolve => require(['./vue/demo.vue'], resolve)},
    {path:'/home',component: resolve => require(['./home.vue'], resolve)}
  ])
}
