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
<style lang="less">
.app {
  color: red;
}
</style>

