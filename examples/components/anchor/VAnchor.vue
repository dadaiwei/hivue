<!--
 * @Author: dadaiwei
 * @Date: 2019-08-09 10:11:36
 * @LastEditors: dadaiwei
 * @LastEditTime: 2019-08-09 10:43:43
 * @Description: 右边锚点组件
 * @Copyright: 绿湾网络科技有限公司
 -->
<template>
  <div :class="['h-anchor', {'h-anchor-left': position == 'left'}]">
    <div class="h-anchor-line">
      <span
        :class="{'visible':linkBallShow}"
        :style="{top:linkBallTop + 'px'}"
        class="h-anchor-line-ball"
      ></span>
    </div>
    <div class="h-anchor-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VAnchor",
  props: {
    target: {
      type: String,
      default: "window"
    },
    position: {
      type: String,
      default: "right"
    }
  },
  data() {
    return {
      distance: 0,
      scollHeight: 0,
      clientHeight: 0,
      linkTotal: [],
      linkBallShow: false,
      linkBallTop: -18,
      index: 0
    };
  },
  mounted() {
    let _this = this;
    setTimeout(function() {
      for (let i = 0; i < _this.$slots.default.length; i++) {
        let linkId = _this.$slots.default[i].elm.id.split("-");
        _this.linkTotal.push([parseFloat(linkId[1]), parseFloat(linkId[2])]);
      }
    });
    if (this.target === "window") {
      this.scollHeight = document.documentElement.scrollHeight;
      this.clientHeight = document.documentElement.clientHeight;

      window.addEventListener("scroll", this.onScroll);
    } else {
      this.scollHeight = document.getElementById(this.target).scrollHeight;
      this.clientHeight = document.getElementById(this.target).clientHeight;
      document
        .getElementById(this.target)
        .addEventListener("scroll", this.onScroll);
    }
  },
  destroyed() {
    if (this.target === "window") {
      window.removeEventListener("scroll", this.onScroll);
    } else {
      document
        .getElementById(this.target)
        .removeEventListener("scroll", this.onScroll);
    }
  },
  methods: {
    onScroll() {
      if (this.target === "window") {
        this.distance = Math.round(document.documentElement.scrollTop) + 10; // 获取到顶部的距离
      } else {
        this.distance =
          Math.round(document.getElementById(this.target).scrollTop) + 10; // 获取到顶部的距离
      }

      if (this.linkTotal.length > 0) {
        if (this.distance + 100 < this.linkTotal[0][0]) {
          this.index = -1;
          this.linkBallTop = -18;
          this.linkBallShow = false;
        } else if (
          this.linkTotal[0][0] - 100 <= this.distance &&
          this.distance <= this.linkTotal[0][0] + 10
        ) {
          this.index = 0;
          this.linkBallTop = 9;
          this.linkBallShow = true;
        } else if (
          this.distance > this.linkTotal[this.linkTotal.length - 1][1]
        ) {
          this.linkBallShow = false;
          this.index = -1;
          this.linkBallTop = 9 + this.linkTotal.length * 27;
        } else if (
          this.distance ===
          this.scollHeight - this.clientHeight + 10
        ) {
          this.linkBallShow = true;
          this.index = this.linkTotal.length - 1;
          this.linkBallTop = 9 + (this.linkTotal.length - 1) * 27;
        } else {
          this.toScroll();
        }
      }

      this.activeTitle();
    },
    toScroll() {
      for (let i = 0; i < this.linkTotal.length - 1; i++) {
        this.linkBallShow = true;
        if (this.distance + 100 >= this.linkTotal[i + 1][0]) {
          this.linkBallTop = 9 + (i + 1) * 27;
          this.index = i + 1;
        }
      }
    },
    activeTitle() {
      for (let i = 0; i < this.$slots.default.length; i++) {
        if (this.index == i) {
          this.$slots.default[i].elm.classList.add("h-anchor-link-active");
        } else {
          this.$slots.default[i].elm.classList.remove("h-anchor-link-active");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.h-anchor {
  z-index: 99;
  position: fixed;
  right: 10px;
  top: 135px;
  width: 150px;
  .h-anchor-line {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    &::before {
      content: " ";
      position: relative;
      width: 2px;
      height: 100%;
      display: block;
      background-color: #e8e8e8;
      margin: 0 auto;
    }
    .h-anchor-line-ball {
      opacity: 0;
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 8px;
      border: 2px solid #1890ff;
      background-color: #fff;
      left: 50%;
      transition: all 0.3s ease-in-out;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .visible {
      display: inline-block;
      opacity: 1;
    }
  }
  .h-anchor-box {
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    color: rgba(0, 0, 0, 0.65);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    position: relative;
    padding-left: 2px;
  }
}
.h-anchor-left {
  right: auto;
  left: 10px;
  .h-anchor-line {
    right: 0;
    left: auto;
  }
  .h-anchor-box {
    text-align: right;
  }
}
</style>