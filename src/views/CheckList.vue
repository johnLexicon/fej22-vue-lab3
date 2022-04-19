<template>
  <div v-if="state.todos.length" class="checklist">
    <TodoItem
      v-for="(todo, index) in state.todos"
      :key="todo.id"
      :todo="todo"
      :index="index"
    />
  </div>
  <div v-else>Nothing Todo!</div>
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
</style>