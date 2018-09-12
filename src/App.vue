<template>
    <div class="app">
        <todo></todo>
    </div>
</template>

<script>
  import Todo from './pages/todo'
  export default {
    name: 'App',
    components: {
      Todo
    }
  }
</script>

<style scoped lang="less">
    .app {
        width: 100%;
        height: 100%;
        background: url("../static/images/bg.gif") no-repeat center;
        background-size: cover;
    }
</style>
