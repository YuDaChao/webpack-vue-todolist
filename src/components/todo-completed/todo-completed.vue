<template>
    <div class="todo-completed">
        <div class="icon-check">
            <Icon type="ios-checkmark-circle-outline" size="30" color="#fff" />
        </div>
        <div class="content">学习 React</div>
    </div>
</template>

<script>
  export default {
    name: 'todo-completed'
  }
</script>

<style scoped lang="less">
    .todo-completed {
        display: flex;
        height: 41px;
        width: 100%;
        border-bottom: 2px solid #eee;
        .icon-check {
            height: 100%;
            width: 41px;
            text-align: center;
            line-height: 41px;
            background-color: #2ac56c;
        }
        .content {
            flex: 1;
            padding: 10px;
            font-size: 16px;
            color: darkgrey;
            background-color: #fff;
            text-decoration: line-through;
        }
    }
</style>
