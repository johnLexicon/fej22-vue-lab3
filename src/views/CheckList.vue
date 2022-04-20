<template>
  <div v-if="state.todos.length" class="checklist">
    <TodoItem
      v-for="(todo, index) in state.todos"
      :key="todo.id"
      :todo="todo"
      :index="index + 1"
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
  overflow-y: auto;
  max-height: 100vh;
  padding: 0 0.7rem;
}
.message {
  text-align: center;
  color: var(--blue);
  font-size: 2rem;
}

@media only screen and (min-width: 768px) {
  .checklist {
    padding: 0 2rem;
  }
}
</style>