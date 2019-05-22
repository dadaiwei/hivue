import Vue from 'vue'
import App from './App.vue'
import { HButton, HProgress } from '../lib/hivue.common'
import '../lib/theme/index.css'

Vue.use(HButton);
Vue.use(HProgress);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
