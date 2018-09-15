<template>
    <Form ref="addForm" :model="todo" :rules="todoValidate">
        <FormItem label="标题" prop="title" :label-width="50">
            <Input placeholder="输入标题" v-model="todo.title" />
        </FormItem>
        <FormItem label="描述" prop="desc" :label-width="50">
            <Input type="textarea" v-model="todo.desc" :autosize="{minRows: 2, maxRows: 5}" placeholder="输入描述" />
        </FormItem>
        <FormItem>
            <Button @click="handleReset('addForm')">Reset</Button>
            <Button type="primary" @click="handleSubmit('addForm')" style="margin-left: 8px">Submit</Button>
        </FormItem>
    </Form>
</template>

<script>
  export default {
    name: 'add-form',
    data () {
      return {
        todo: {
          title: '',
          desc: ''
        },
        todoValidate: {
          title: [
            { required: true, message: '标题不能为空', trigger: 'blur'}
          ],
          desc: [
            { required: true, message: '描述不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            let todo = {...this.todo}
            this.$emit('submit', todo)
            this.handleReset(name)
          } else {
            this.$Message.error('验证失败！');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      }
    }
  }
</script>

<style scoped>

</style>
