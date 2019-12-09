import Vue from 'vue'
import App from './App.vue'
import vueHighlightJs from 'vue-highlightjs'
import hivue from '../packages/index'
import './config/fCode'
import router from './router/index'
import VAnchor from './components/anchor/VAnchor'
import VAnchorLink from './components/anchor/VAnchorLink'
import VApiTable from './components/api-table/VApiTable'
import VDemoBlock from './components/demo-block/VDemoBlock'
import 'highlight.js/styles/atom-one-dark.css'
import '../packages/theme/index.scss'
import './css/main.scss'

const components = [VAnchor, VAnchorLink, VApiTable, VDemoBlock]

components.forEach(component => Vue.component(component.name, component))

Vue.config.productionTip = false
Vue.use(hivue)
Vue.use(vueHighlightJs)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
