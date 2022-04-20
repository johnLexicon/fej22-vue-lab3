<template>
  <transition name="switch">
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
  </transition>
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
  position: relative;
}

/** switch between no todos text transitions */

.switch-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.switch-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.switch-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.switch-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.7s ease;
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
  transition: all 0.7s ease;
}

.list-leave-active {
  transition: all 0.7s ease;
  /* For the transition to be able to work */
  position: absolute;
  left: 0.7rem;
  right: 0.7rem;
}

.list-move {
  transition: all 1s ease;
}

@media only screen and (min-width: 768px) {
  .checklist {
    padding: 0 2rem;
  }
  .list-leave-active {
    left: 2rem;
    right: 2rem;
  }
}
</style>