import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
Vue.use(ElementUI);
Vue.config.productionTip = false
import { registerMicroApps, start } from 'qiankun';
const apps = [
    {
      name:'vueApp',//微应用名字唯一
      entry:'http://localhost:10000/',
      container:'#vueApp',//容器名
      activeRule:'/vueApp'//激活路径
    },
  {
    name:'jqApp',//微应用名字唯一
    entry:'http://localhost:20000/',
    container:'#jqApp',//容器名
    activeRule:'/jqApp'//激活路径
  }
];

/*registerMicroApps注册微应用*/
registerMicroApps(apps);
start(
    {prefetch:false} //取消预加载
);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
