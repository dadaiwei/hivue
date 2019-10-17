import HContainer from './components/container/index'
import HHeader from './components/header/index'
import HMain from './components/main/index'
import HAside from './components/aside/index'
import HFooter from './components/footer/index'
import HRow from './components/row/index'
import HCol from './components/col/index'
import HButton from './components/button/index'
import HProgress from './components/progress/index'

const components = [
  HContainer,
  HHeader,
  HMain,
  HAside,
  HFooter,
  HRow,
  HCol,
  HButton,
  HProgress
];

const install = function(Vue) {
  if(install.installed) {
    return;
  }
  install.installed = true;
  components.map(component => Vue.use(component));
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  HCol,
  HRow,
  HButton,
  HProgress
}

export default {
  version: '0.0.8',
  install,
  HCol,
  HRow,
  HButton,
  HProgress
}