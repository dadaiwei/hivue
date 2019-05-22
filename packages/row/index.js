/*
 * @File: HRow.vue
 * @Description: 注册HRow全局组件
 * @Author: Dadaiwei
 * @Date: 2019-02-01 18:23:37
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-18 10:31:09
 */

import HRow from './src/HRow'

HRow.install = function(Vue) {
  Vue.component(HRow.name, HRow);
}

export default HRow;
