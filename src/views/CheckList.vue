<template>
  <div v-if="state.todos.length" class="checklist">
    <TodoItem
      v-for="(todo, index) in state.todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
    />
  </div>
  <div class="message" v-else>Nothing To Do!!!</div>
</template>

<script>
import state from "@/state";
import TodoItem from "@/components/TodoItem";
export default {
  name: "CheckList",
  components: {
    TodoItem,
  },
  setup() {
    return {
      state,
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