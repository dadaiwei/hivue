/*
 * @Author: dadaiwei
 * @Date: 2019-05-23 10:08:13
 * @LastEditors: dadaiwei
 * @LastEditTime: 2019-10-10 19:09:20
 * @Description: 导航配置
 */
const naviData = [
    {
        title: '快速上手',
        link: true,
        active: true,
        to: '/installation',
        level: 1,
    },
    {
        title: '定制主题',
        link: true,
        active: false,
        to: '/theme-custom',
        level: 1,
    },
    {
        title: '更新日志',
        active: false,
        to: '/change-log',
        link: true,
        level: 1,
    },
    {
        title: '组件',
        link: false,
        collapsed: false,
        level: 1,
    },
    {
        title: '通用',
        link: false,
        level: 2,
    },
    {
        title: 'Button 按钮',
        active: false,
        link: true,
        to: '/components/button',
        level: 3,
    },
    {
        title: 'Icon 图标',
        active: false,
        link: true,
        to: '/components/icon',
        level: 3,
    },
    {
        title: '布局',
        link: false,
        level: 2,
    },
    {
        title: 'Grid 栅格',
        link: true,
        to: '/components/grid',
        level: 3,
    },
    {
        title: 'Layout 布局',
        link: true,
        to: '/components/layout',
        level: 3,
    },
    {
        title: '数据展示',
        link: false,
        level: 2,
    },
    {
        title: 'Progress 进度条',
        link: true,
        to: '/components/progress',
        level: 3,
    },
]

export default naviData
