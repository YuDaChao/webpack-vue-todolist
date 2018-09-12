<template>
    <div class="text">{{text}}</div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        text: 'this is a app'
      }
    }
  }
</script>

<style scoped lang="less">
    .text {
        color: #000;
    }
</style>
