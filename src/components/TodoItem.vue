<template>
  <div class="todo-item">
    <div class="todo-count">{{ index }}</div>
    <div class="todo-content">
      <span
        :class="{ completed: todo.completed }"
        @click="onToggleComplete"
        class="todo-title"
        >{{ todo.title }}</span
      ><span class="todo-btns">
        <i @click="onEdit" class="fa-solid fa-pen-to-square"></i>
        <i @click="onDelete" type="button" class="fa-solid fa-trash-can"></i
      ></span>
    </div>
  </div>
</template>

<script>
import state from "@/state";
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    function onDelete() {
      state.removeTodo(props.todo.id);
    }
    function onEdit() {
      state.showModal(props.todo);
    }
    function onToggleComplete() {
      state.toggleComplete(props.todo.id);
    }
    return {
      onDelete,
      onEdit,
      onToggleComplete,
      state,
    };
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
  min-width: 300px;
}
.todo-item > * {
  box-shadow: var(--dark-navy) 0px 1px 3px, var(--dark-navy) 0px 1px 2px;
}
.todo-count {
  padding: 1rem;
  border-radius: 5px;
  margin-right: 1rem;
  background-color: var(--dark-navy);
}
.todo-content {
  background-color: var(--dark-navy);
  border-radius: 5px;
  padding: 1rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.todo-title {
  cursor: pointer;
  font-size: small;
  flex: 1;
}
.todo-title.completed {
  text-decoration: line-through;
  color: var(--dark-slate);
}
.todo-btns > i {
  cursor: pointer;
  margin: 0 0.5rem;
}
.todo-btns > i:hover {
  color: var(--blue);
}

@media only screen and (min-width: 768px) {
  .todo-title {
    font-size: large;
  }
}
</style>