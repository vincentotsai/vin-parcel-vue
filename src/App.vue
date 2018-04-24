<template>
  <div class="app">
      {{msg}}
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      msg:'parcel vue demo'
    }
  }
}
</script>
<style lang="less" scoped>
.app {
  color: red;
  border-radius: 20px;
  width: 400px;
  height: 400px;
  background: gray;
  box-sizing:border-box;
}
</style>

