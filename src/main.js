import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Message);
Vue.prototype.$message = Message;
Vue.prototype.$http = axios;

new Vue({

  data:function(){
      return{
          logged: false,
          is_superuser: false,

          my_person_center_info: true,
          my_person_center_blogs: false,
          my_person_center_follower: false,
          my_person_center_following: false,
      }

  },
    render: h => h(App),
    router,



}).$mount('#app');
