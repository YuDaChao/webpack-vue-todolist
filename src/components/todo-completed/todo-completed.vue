<template>
    <div class="todo-completed" @mouseenter="isFocus = true" @mouseleave="isFocus = false">
        <div class="icon-check">
            <Icon :type="isFocus ? 'md-trash' : 'ios-checkmark-circle-outline'" size="30" color="#fff" />
        </div>
        <div class="content">{{todo.desc}}</div>
    </div>
</template>

<script>
  export default {
    name: 'todo-completed',
    props: {
      todo: {
        type: Object,
        required: true,
        default: {}
      }
    },
    data () {
      return {
        isFocus: false
      }
    }
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
