/*
 * @Author: dadaiwei
 * @Date: 2019-05-23 10:08:13
 * @LastEditors: dadaiwei
 * @LastEditTime: 2019-08-09 10:02:10
 * @Description:
 * @Copyright: 绿湾网络科技有限公司
 */
const naviData = [
  {
    title: "快速上手",
    link: true,
    active: true,
    to: "/installation",
    level: 1,
    id: 1
  },
  {
    title: "定制主题",
    link: true,
    active: false,
    to: "/theme-custom",
    level: 1,
    id: 2
  },
  {
    title: "更新日志",
    active: false,
    to: "/change-log",
    link: true,
    level: 1,
    id: 3
  },
  {
    title: "组件",
    link: false,
    collapsed: false,
    level: 1,
    id: 4
  },
  {
    title: "通用",
    link: false,
    level: 2,
    id: 5
  },
  {
    title: "Button 按钮",
    active: false,
    link: true,
    to: "/components/button",
    level: 3,
    id: 6
  },
  {
    title: "Icon 图标",
    active: false,
    link: true,
    to: "/components/icon",
    level: 3,
    id: 7
  }
];

export default naviData;
