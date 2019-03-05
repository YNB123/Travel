import Vue from 'vue'
import App from './App'
//import VueRouter from 'vue-router'
 import VueAwesomeSwiper from 'vue-awesome-swiper'
 import router from './router/router'
 import 'sty/reset.css'
 import 'sty/border.css'
 import 'sty/iconfont.css'
 import 'swiper/dist/css/swiper.css'
 import fastClick from 'fastclick'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  el: '#app',
  router,
  components: { App:App },
  template: '<App/>'
});

//路由就是根据网站的不同返回的内容不同