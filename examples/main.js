import Vue from 'vue'
import App from './App.vue'
import vueHighlightJs from 'vue-highlightjs'
import hivue from '../lib/hivue.umd.min'
import '../lib/theme/index.css'
import './css/cover.scss'
import router from './router/index';

Vue.config.productionTip = false
Vue.use(hivue);
Vue.use(vueHighlightJs);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
