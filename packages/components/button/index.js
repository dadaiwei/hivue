/*
 * @File: index.js
 * @Description: 注册HButton全局组件
 * @Author: Dadaiwei
 * @Date: 2018-12-10 19:30:05
 * @LastEditor: Dadaiwei
 * @LastEditTime: 2019-05-18 10:23:27
 */
import HButton from './src/HButton'

HButton.install = function(Vue) {
    Vue.component(HButton.name, HButton);
}

export default HButton;

