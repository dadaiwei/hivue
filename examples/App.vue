<template>
  <div id="app">
    <v-home></v-home>
  </div>
</template>

<script>
import VHome from "./views/VHome";

export default {
  name: "app",
  components: {
    VHome
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
