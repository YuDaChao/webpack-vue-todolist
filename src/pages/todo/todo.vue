<template>
   <div class="todo">
       <todo-header></todo-header>
       <div class="content">
           <div class="todo-list">
               <div class="todo-items">
                   <todo-item></todo-item>
                   <todo-item></todo-item>
               </div>
           </div>
           <div class="todo-completed-wrapper">
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
            }
            .todo-completed-wrapper {
                width: 30%;
            }
        }
    }
</style>
