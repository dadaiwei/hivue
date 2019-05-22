import HRow from './row/index'
import HCol from './col/index'
import HButton from './button/index'
import HProgress from './progress/index'

const components = [
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
  version: '0.0.3',
  install,
  HCol,
  HRow,
  HButton,
  HProgress
}