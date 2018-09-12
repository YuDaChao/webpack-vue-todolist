<template>
    <div class="todo-header">
        <div class="title">
            <Icon type="md-menu" size="45" color="#26A65B" /><span>TODO</span>
        </div>
        <div class="tag">
            An easy way to manage your work.
        </div>
    </div>
</template>

<script>
  export default {
    name: 'todo-header'
  }
</script>

<style scoped lang="less">
    .todo-header {
        .title {
            text-align: center;
            span {
                color: #000;
                font-size: 30px;
                vertical-align: middle;
                font-weight: 700;
                margin-left: 10px;
            }
        }
        .tag {
            color: #3A539B;
            font-size: 24px;
            text-align: center;
            font-weight: 400;
        }
    }
</style>
