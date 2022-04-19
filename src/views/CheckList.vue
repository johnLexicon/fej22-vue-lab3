<template>
  <div v-if="state.todos.length" class="checklist">
    <TodoItem
      v-for="(todo, index) in state.todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
      @onDelete="handleDelete"
    />
  </div>
  <div class="message" v-else>Nothing To Do!!!</div>
</template>

<script>
import { reactive } from "vue";
import stateContent from "@/state";
import TodoItem from "@/components/TodoItem";
export default {
  name: "CheckList",
  components: {
    TodoItem,
  },
  setup() {
    const state = reactive(stateContent);

    function handleDelete(todoId) {
      console.log(todoId);
      state.removeTodo(todoId);
    }

    return {
      state,
      handleDelete,
    };
  },
};
</script>

<style scoped>
.checklist {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.message {
  text-align: center;
  color: var(--blue);
  font-size: 2rem;
}
</style>