<!--
 * @Author: dadaiwei
 * @Date: 2019-06-05 09:42:45
 * @LastEditors: dadaiwei
 * @LastEditTime: 2019-08-09 10:10:03
 * @Description: 
 
 -->
<template>
  <div class="home">
    <div class="header">
      <div class="title">hivue</div>
    </div>
    <div class="main">
      <div class="aside">
        <navi-aside></navi-aside>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import NaviAside from "../components/aside/NaviAside";

export default {
  name: "VHome",
  components: {
    NaviAside
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    line-height: 70px;
    background-color: #fff;
    z-index: 100;
    .title {
      height: 100%;
      width: 85%;
      margin: 0 auto;
      padding: 0 10px;
      border-bottom: 1px solid #dcdfe6;
      color: #409eff;
      font-size: 26px;
      font-weight: 500;
      font-family: "\5FAE\8F6F\96C5\9ED1";
    }
  }
  .main {
    position: relative;
    top: 80px;
    width: 85%;
    height: calc(100% - 80px);
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    z-index: 90;
    .aside {
      position: fixed;
      width: 200px;
      height: 80%;
      top: 100px;
      border-right: 1px solid rgb(232, 232, 232);
      overflow: auto;
    }
    .content {
      margin: 0 100px 0 240px;
      width: 100%;
    }
  }
}
</style>