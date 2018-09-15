<template>
    <Card dis-hover class="todo-card">
        <p slot="title">
            <Checkbox
                    size="large"
                    :value="todo.id"
                    @on-change="handleCheckTodo(todo)">
                {{todo.title}}
            </Checkbox>
        </p>
        <a href="#" slot="extra">
            <Icon @click.prevent="handleDeleteTodo(todo)" type="md-trash" size="24" color="#26a65b" />
            <Icon @click.prevent="handleDoneTodo(todo)" type="md-checkmark-circle" size="24"color="#26a65b" />
        </a>
        {{todo.desc}}
    </Card>
</template>

<script>
  export default {
    name: 'todo-item',
    props: {
      todo: {
        type: Object,
        required: true,
        default: {}
      }
    },
    methods: {
      handleDeleteTodo (todo) {
        this.$emit('handleDeleteTodo', todo)
      },
      handleCheckTodo (todo) {
        this.$emit('handleCheckTodo', todo)
      },
      handleDoneTodo (todo) {
        this.$emit('handleDoneTodo', todo)
      }
    }
  }
</script>

<style lang="less">
    .todo-card {
        &.ivu-card-bordered {
            border: none;
        }
        &.ivu-card {
            border-radius: 0;
        }
        .ivu-card-head {
            background-color: #cd4436;
            padding: 10px 16px;
        }
        .ivu-checkbox-wrapper.ivu-checkbox-large {
            font-size: 16px;
            color: #fff;
        }
        .ivu-card-head p i, .ivu-card-head p span {
            vertical-align: text-bottom;
        }
        .ivu-card-extra {
            top: 10px;
        }
        .ivu-icon-md-trash:hover, .ivu-icon-md-checkmark-circle:hover {
            color: #fff !important;
        }
    }
</style>
