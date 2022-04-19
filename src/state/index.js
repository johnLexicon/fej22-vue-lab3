import { ref } from 'vue';

export default {
  modalEnabled: ref(false),
  todos: ref([
    { id: 1, title: 'Todo 1' },
    { id: 2, title: 'Todo 2' },
    { id: 3, title: 'Todo 3' }
  ]),
  removeTodo(todoId) {
    const filteredTodos = this.todos.filter((todo) => todo.id !== todoId);
    this.todos = filteredTodos;
  }
};
