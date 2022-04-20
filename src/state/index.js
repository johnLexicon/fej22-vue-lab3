import { ref, reactive } from 'vue';

const state = {
  modalInfo: reactive({
    modalEnabled: false,
    currentTodo: null
  }),
  todos: ref([
    { id: 1, title: 'Todo 1', completed: false },
    { id: 2, title: 'Todo 2', completed: false },
    { id: 3, title: 'Todo 3', completed: false }
  ]),
  showModal(currentTodo) {
    this.modalInfo.modalEnabled = true;
    this.modalInfo.currentTodo = currentTodo;
  },
  closeModal() {
    this.modalInfo.modalEnabled = false;
    this.modalInfo.currentTodo = null;
  },
  removeTodo(todoId) {
    const filteredTodos = this.todos.filter((todo) => todo.id !== todoId);
    this.todos = filteredTodos;
  },
  addTodo(todoTitle) {
    this.todos.push({ id: Date.now(), title: todoTitle });
  },
  toggleComplete(todoId) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === todoId) return { ...todo, completed: !todo.completed };
      return todo;
    });
  }
};

export default reactive(state);
