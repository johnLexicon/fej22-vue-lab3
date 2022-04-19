<template>
  <div v-if="state.todos.length" class="checklist">
    <div v-for="(todo, index) in state.todos" :key="todo.id" class="todo-item">
      <div class="todo-count">{{ index }}</div>
      <div class="todo-content">
        <span class="todo-title">{{ todo.title }}</span
        ><span class="todo-btns"><i class="fa-solid fa-trash-can"></i></span>
      </div>
    </div>
  </div>
  <div v-else>Nothing Todo!</div>
</template>

<script>
import { reactive } from "vue";
import stateContent from "@/state";
export default {
  name: "CheckList",
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
.todo-item {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  min-width: 350px;
}
.todo-item > * {
  box-shadow: var(--dark-navy) 0px 1px 3px, var(--dark-navy) 0px 1px 2px;
}
.todo-count {
  padding: 1rem;
  background-color: var(--lightest-navy);
  border-radius: 5px;
  margin-right: 1rem;
}
.todo-content {
  background-color: var(--lightest-navy);
  border-radius: 5px;
  padding: 1rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>