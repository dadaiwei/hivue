<!--
 * @Author: dadaiwei
 * @Date: 2019-06-06 21:01:24
 * @LastEditors: dadaiwei
 * @LastEditTime: 2019-08-09 10:43:45
 * @Description: 
 * @Copyright: 绿湾网络科技有限公司
 -->
<template>
  <ul>
    <li
      v-for="(item, index) in naviData"
      :key="index"
      @click="goPath(item)"
      :class="['navi-list-item', 'navi-level-' + item.level,  { 'navi-list-link': item.link, 'navi-list-active': item.active }]"
    >{{ item.title }}</li>
  </ul>
</template>

<script>
import naviData from "../../config/navi";

export default {
  name: "NaviAside",
  data() {
    return {
      naviData
    };
  },
  mounted() {
    const path = this.$route.path;
    if (path) {
      this.resetAllNaviItems();
      this.setMatchedListActive(path);
    }
  },
  watch: {
    "$route.path": function(newValue, oldValue) {
      this.resetAllNaviItems();
      this.setMatchedListActive(newValue);
    }
  },
  methods: {
    resetAllNaviItems() {
      this.naviData.forEach(item => {
        if (item.hasOwnProperty("active")) {
          item.active = false;
        }
      });
    },
    setMatchedListActive(matchedPath) {
      const matchedList = this.naviData.find(item => item.to === matchedPath);
      if (matchedList) {
        matchedList.active = true;
      }
    },
    /**
     * @description: 路由跳转
     * @author: dadaiwei
     */
    goPath(item) {
      if (item.to) {
        this.resetAllNaviItems();
        item.active = true;
        this.$router.push({
          path: item.to
        });
      }
    }
  }
};
</script>

<style lang="scss">
.navi-list-item {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #314659;
}
.navi-list-link {
  cursor: pointer;
  &:hover {
    color: #1890ff;
  }
}
.navi-list-active {
  color: #1890ff;
}
.navi-level-2 {
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.45);
}
.navi-level-3 {
  padding-left: 20px;
  color: #314659;
}
</style>