<template>
    <div class="todo">
        <Modal v-model="showModal" width="360">
            <p slot="header" style="color:#f60;text-align:center">
                <Icon type="ios-add-circle"/>
                <span>ADD TODO</span>
            </p>
            <div style="text-align:center">
                <add-form @submit="submitTodo"></add-form>
            </div>
        </Modal>
        <todo-header></todo-header>
        <div class="content">
            <div class="todo-list">
                <div class="todo-list-header">
                    <h2>Working tasks</h2>
                    <Button type="warning"
                            :disabled="checkTodoIds.length === 0"
                            @click="handleDelTodos"
                            style="margin-right: 20px">
                        Delete
                    </Button>
                    <Button type="success"
                            :disabled="checkTodoIds.length === 0"
                            @click="handleDoneTodos"
                            style="margin-right: 20px">
                        Done
                    </Button>
                </div>
                <transition-group class="todo-items" name="fade">
                    <todo-item
                            style="margin: 0 10px 10px 0"
                            v-for="todo in workingTodos"
                            :key="todo.id"
                            :todo="todo"
                            @handleDeleteTodo="handleDeleteTodo"
                            @handleCheckTodo="handleCheckTodo"
                            @handleDoneTodo="handleDoneTodo">
                    </todo-item>
                </transition-group>
                <div style="margin-top: 20px; text-align: center">
                    <Button type="success" @click="showModal = true" long style="width: 98%; height: 45px">
                        <Icon type="md-add" size="24"/>
                        <span class="add-btn">ADD TODO</span>
                    </Button>
                </div>
            </div>
            <div class="todo-completed-wrapper">
                <h2 style="line-height: 32px; margin-bottom: 20px">Completed Tasks</h2>
                <todo-completed
                        v-for="todo in doneTodos"
                        :key="todo.id"
                        :todo="todo">
                </todo-completed>
            </div>
        </div>
    </div>
</template>

<script>
  import {mapMutations, mapState, mapGetters} from 'vuex'
  import TodoHeader from '../../components/todo-header'
  import TodoItem from '../../components/todo-item'
  import TodoCompleted from '../../components/todo-completed'
  import AddForm from '../../components/add-form'

  export default {
    name: 'todo',
    components: {
      TodoHeader,
      TodoItem,
      TodoCompleted,
      AddForm
    },
    data() {
      return {
        showModal: false,
        checkTodoIds: []
      }
    },
    mounted() {

    },
    computed: {
      ...mapGetters(['doneTodos', 'workingTodos'])
    },
    methods: {
      ...mapMutations([
        'add_todo',
        'done_todo',
        'delete_todo',
        'done_todo',
        'done_todos',
        'delete_todos'
      ]),
      handleDeleteTodo(todo) {
        if (todo) {
          this.delete_todo(todo.id)
        }
      },
      handleCheckTodo(todo) {
        if (
          this.checkTodoIds.length === 0 ||
          this.checkTodoIds.indexOf(todo.id) === -1
        ) {
          this.checkTodoIds.push(todo.id)
        } else {
          this.checkTodoIds.splice(this.checkTodoIds.indexOf(todo.id), 1)
        }
      },
      handleDoneTodo(todo) {
        this.done_todo(todo.id)
      },
      handleDoneTodos() {
        if (this.checkTodoIds.length) {
          this.done_todos(this.checkTodoIds)
          this.checkTodoIds = []
        }
      },
      handleDelTodos() {
        if (this.checkTodoIds.length) {
          this.delete_todos(this.checkTodoIds)
          this.checkTodoIds = []
        }
      },
      submitTodo(todo) {
        if (todo) {
          todo.id = Math.random()
          todo.done = false
          this.add_todo(todo)
          this.showModal = false
        }
      }
    }
  }
</script>

<style scoped lang="less">
    .todo {
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        .content {
            display: flex;
            width: 100%;
            margin-top: 30px;
            &:hover {
                cursor: pointer;
            }
            .todo-list {
                width: 70%;
                .todo-list-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                }
                .todo-items {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                    .todo-card {
                        width: 48%;
                    }
                }
                .fade-enter-active, .fade-leave-active {
                    transition: all 0.3s;
                    opacity: 1;
                }
                .fade-enter, .fade-leave-to {
                    opacity: 0;
                }
                .add-btn {
                    font-size: 16px;
                    vertical-align: middle;
                }
            }
            .todo-completed-wrapper {
                width: 30%;
            }

            .todo-completed-wrapper h2, .todo-list h2 {
                color: #8F1D21;
                width: 98%;
            }
        }
    }
</style>
<style>
    .ivu-modal-footer {
        display: none !important;
    }
</style>
