<template>
  <div class="content-box">
    <h2 class="demo-title">更新日志</h2>
    <div class="change-log-container">
      <div class="change-log-item" v-for="(log, index) in logs" :key="index">
        <div class="change-log-item-anchor"></div>
        <div class="change-log-time">{{log.time}}</div>
        <div class="change-log-contents">
          <div
            class="change-log-content-item"
            v-for="(content, index) in log.contents"
            :key="index"
          >{{content.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChangeLog",
  data () {
    return {
      logs: [
        {
          time: "2019-09-04",
          contents: [
            {
              description: "完成按钮组件"
            },
            {
              description: "上传Icon demo"
            }
          ]
        },
        {
          time: "2019-10-11",
          contents: [
            {
              description: "完成栅格布局组件"
            },
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.change-log-container {
  margin-top: 50px;
  padding-left: 20px;
  border-left: 2px solid #e8e8e8;
}
.change-log-item {
  position: relative;
  margin: 30px 0;
  .change-log-item-anchor {
    position: absolute;
    left: -26px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    border: 2px solid #1890ff;
    background-color: #ffffff;
    &:after {
      width: 6px;
      height: 10px;
    }
  }
  .change-log-time {
    margin: 0 1px;
    padding: 0.2em 0.4em;
    display: inline-block;
    font-size: 0.9em;
    background: #f2f4f5;
    border: 1px solid #eee;
    border-radius: 3px;
  }
  .change-log-contents {
    margin-top: 10px;
    .change-log-content-item {
      padding-left: 5px;
      font-size: 14px;
      line-height: 26px;
    }
  }
}
</style>