<template>
  <form @submit.prevent="onSubmit">
    <div class="form-group">
      <div class="input-group">
        <div class="input-group-area">
          <input
            placeholder="title..."
            id="todoTitle"
            name="todoTitle"
            type="text"
            v-model="todoTitle"
            minlength="1"
            maxlength="20"
            ref="inputRef"
          />
        </div>
        <button class="input-group-icon">
          <i v-if="!editMode" class="fa-solid fa-plus"></i>
          <i v-else class="fa-solid fa-pen-to-square"></i>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import state from "@/state";
import { ref, onMounted } from "vue";
export default {
  name: "TodoForm",
  setup() {
    const inputRef = ref(null);
    const editMode = state.modalInfo.currentTodo ? true : false;
    const todoTitle = ref(
      state.modalInfo.currentTodo ? state.modalInfo.currentTodo.title : ""
    );

    onMounted(() => {
      inputRef.value.focus();
    });

    function handleEdit() {
      state.editTodo(state.modalInfo.currentTodo.id, todoTitle.value);
      state.closeModal();
    }

    function handleAdd() {
      state.addTodo(todoTitle.value);
      todoTitle.value = "";
    }

    function onSubmit() {
      if (!todoTitle.value || todoTitle.value.trim().length < 1) {
        console.log("Validation error!");
        return;
      }
      if (editMode) handleEdit();
      else handleAdd();
    }
    return {
      editMode,
      state,
      onSubmit,
      todoTitle,
      inputRef,
    };
  },
};
</script>

<style scoped>
form {
  width: 80%;
  margin: auto;
}
.input-group {
  display: table;
  border-collapse: collapse;
  width: 100%;
}
.input-group > div {
  display: table-cell;
  vertical-align: middle; /* For Safari */
}
.input-group-area {
  width: 100%;
}
.input-group input {
  display: block;
  border: none;
  width: 100%;
  padding: 8px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 1.3rem;
}
.input-group input:focus {
  outline: none;
}
.input-group-icon {
  cursor: pointer;
  padding: 12px 12px;
  background-color: var(--navy);
  color: var(--white);
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>