/*
 * @File: index.js
 * @Description: 注册HProgress全局组件
 * @Author: Dadaiwei
 * @Date: 2018-12-03 18:55:28
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-18 10:24:11
 */
import HProgress from './src/HProgress'

HProgress.install = function(Vue) {
  Vue.component(HProgress.name, HProgress);
}

export default HProgress;
