<template>
   <div class="todo">
       <todo-header></todo-header>
       <div class="content">
           <div class="todo-list">
               <h2>Working tasks</h2>
               <div class="todo-items">
                   <todo-item></todo-item>
                   <todo-item></todo-item>
               </div>
               <div style="margin-top: 20px; text-align: center">
                   <Button type="success" long style="width: 98%; height: 45px">
                       <Icon type="md-add" size="24" /> <span class="add-btn">ADD TODO</span>
                   </Button>
               </div>
           </div>
           <div class="todo-completed-wrapper">
               <h2>Completed Tasks</h2>
               <todo-completed></todo-completed>
               <todo-completed></todo-completed>
           </div>
       </div>
   </div>
</template>

<script>
  import TodoHeader from '../../components/todo-header'
  import TodoItem from '../../components/todo-item'
  import TodoCompleted from '../../components/todo-completed'
  export default {
    name: 'todo',
    components: {
      TodoHeader,
      TodoItem,
      TodoCompleted
    }
  }
</script>

<style scoped lang="less">
    .todo {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
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
                .todo-items {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    .todo-card {
                        width: 48%;
                    }
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
                margin: 0 auto 10px;
            }
        }
    }
</style>
