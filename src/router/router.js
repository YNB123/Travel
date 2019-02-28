
 import Vue from 'vue'
 import Router from 'vue-router'
 import home from '@/pages/home/home'
 import company from '@/pages/company/company'
 


 Vue.use(Router)

 export default new Router({
  routes:[{
   path:'/',
   name:'home',
   component:home
  },{
    path:'/company',
    name:'company',
    component:company
   },
   {
    path:'/home',
    name:'home',
    component:home
   }
]

 })
