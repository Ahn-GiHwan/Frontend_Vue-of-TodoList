import Vue from 'vue';
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import Index from './components/Index.vue';
import Edit from './components/Edit.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  { name: "Index", path: "/", component: Index },
  { name: "Edit", path: "/edit", component: Edit }
];
const router = new VueRouter({
  routes // `routes: routes`의 줄임
});
new Vue({
  render: h => h(App), router
}).$mount('#app');
