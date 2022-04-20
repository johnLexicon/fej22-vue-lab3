<template>
  <TransitionGroup
    tag="div"
    name="list"
    v-if="state.todos.length"
    class="checklist"
    appear
  >
    <TodoItem
      v-for="(todo, index) in state.todos"
      :key="todo.id"
      :todo="todo"
      :index="index + 1"
    />
  </TransitionGroup>
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
  position: relative;
}
.message {
  text-align: center;
  color: var(--blue);
  font-size: 2rem;
}

/* list transitions */

.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.list-enter-to {
  opacity: 1;
  transform: scale(1);
}

.list-leave-from {
  opacity: 1;
  transform: scale(1);
}

.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.list-enter-active {
  transition: all 0.4s ease;
}

.list-leave-active {
  transition: all 0.4s ease;
  /* For the transition to be able to work */
  position: absolute;
  left: 0;
  right: 0;
}

.list-move {
  transition: all 0.3s ease-out;
}

@media only screen and (min-width: 768px) {
  .checklist {
    padding: 0 2rem;
  }
}
</style>