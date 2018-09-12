<template>
    <Card dis-hover class="todo-card">
        <p slot="title">
            <Checkbox size="large">学习 Vue</Checkbox>
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="md-trash" size="24" color="#26a65b"/>
        </a>
        这是一段描述
    </Card>
</template>

<script>
  export default {
    name: 'todo-item'
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
    }
</style>
